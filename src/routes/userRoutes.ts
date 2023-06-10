import {Router} from 'express';

const router=Router();

//-----USER CRUD-----

//**Create user**
router.post('/',(req,res)=>{
    res.status(501).json({error:'not implemented'})
}); //create

//**list users**
router.get('/',(req,res)=>{
    res.status(501).json({error:'not implemented'})
}); //read

//**get one user**
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    res.status(501).json({error:`not implemented ${id}`})
}); //read

//**update user**
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    res.status(501).json({error:`not implemented ${id}`})
}); //update


//**delete user**
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    res.status(501).json({error:`not implemented ${id}`})
})


export default router;