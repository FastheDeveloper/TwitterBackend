import {Router} from 'express';
import { PrismaClient } from '@prisma/client';
const router=Router();
const Prisma=new PrismaClient();
//-----Tweet CRUD-----

//**Create tweet**
router.post('/',async (req,res)=>{
    const {image,userId,content,impressions,}=req.body;
    try{
        const result=await Prisma.tweet.create({
            data:{
               userId,
               content,
               image,
               impressions,
               
                  
            }
        })
        res.json(result)
    }catch(e){
        res.status(400).json({error:"user already exists"})
    }
}); //create

//**list tweet**
router.get('/',async (req,res)=>{
    const allTweet=await Prisma.tweet.findMany({
        include:{user:{select:{id:true,name:true,username:true,image:true}}},
        // select:{
        //     id:true,
        //     content:true,
        //     user:{
        //        select:{
        //              name:true,
        //                 username:true,
        //                 id:true,
        //                 image:true,
        //             }

        //     }
        // }
    }); //prisama .user is table name .findmany is query
    
    if(!allTweet) res.status(400).json({error:"tweets not found"} )
    res.json(allTweet)
}); //read

//**get one tweet**
router.get('/:id',async (req,res)=>{
    const {id}=req.params;
    const tweet=await Prisma.tweet.findUnique({ 
        where:{id:Number(id)},
        include:{user:true}
    })
    if(!tweet) res.status(400).json({error:"tweet not found"} ) 
    res.json(tweet)
}); //read

//**update tweet**
router.put('/:id',async (req,res)=>{
    const {id}=req.params;
    const {impressions}=req.body;

    try{
        const result= await Prisma.tweet.update({
            where:{id:Number(id)},
            data:{
                impressions,
                                
            }
        })
        res.json(result)
    }catch(e){
        res.status(400).json({error:"user not found"})
    }
}); //update


//**delete tweet**
router.delete('/:id',async (req,res)=>{
    const {id}=req.params;
    await Prisma.tweet.delete({
        where:{id:Number(id)}
    })
    
    res.sendStatus(200)
})


export default router;