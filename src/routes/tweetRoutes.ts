import {Router} from 'express';

const router=Router();

//-----Tweet CRUD-----

//**Create tweet**
router.post('/',(req,res)=>{
    res.status(501).json({error:'not implemented tweet'})
}); //create

//**list tweet**
router.get('/',(req,res)=>{
    res.status(501).json({error:'not implemented'})
}); //read

//**get one tweet**
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    res.status(501).json({error:`not implemented ${id}`})
}); //read

//**update tweet**
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    res.status(501).json({error:`not implemented tweet ${id}`})
}); //update


//**delete tweet**
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    res.status(501).json({error:`not implemented ${id}`})
})


export default router;