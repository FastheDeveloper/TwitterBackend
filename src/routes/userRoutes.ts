import e, {Router} from 'express';
import {  } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const router=Router();
const Prisma=new PrismaClient();
//-----USER CRUD-----

//**Create user**
router.post('/',async (req,res)=>{
    const {name,email,username}=req.body;
    console.log(email,name,username)
    try{
        const result=await Prisma.user.create({
            data:{
                name,
                email,
                username,
                bio:"Hello i am new on twitter",
    
            }
        })
        res.json(result)
    }catch(e){
        res.status(400).json({error:"user already exists"})
    }
   
   
}); //create

//**list users**
router.get('/',async(req,res)=>{
    const allUser=await Prisma.user.findMany(); //prisama .user is table name .findmany is query
    res.json(allUser)
}); //read

//**get one user**
router.get('/:id', async (req,res)=>{
    const {id}=req.params;
    const user=await Prisma.user.findUnique({ 
        where:{id:Number(id)}
    })
    res.json(user)
}); //read

//**update user**
router.put('/:id',async (req,res)=>{
    const {id}=req.params;
    const {bio,name,image}=req.body;

    try{
        const result= await Prisma.user.update({
            where:{id:Number(id)},
            data:{
                bio,
                name,
                image
            }
        })
        res.json(result)
    }catch(e){
        res.status(400).json({error:"user not found"})
    }
  
}); //update


//**delete user**
router.delete('/:id',async (req,res)=>{
    const {id}=req.params;
    await Prisma.user.delete({
        where:{id:Number(id)}
    })
    
    res.sendStatus(200)
})


export default router;