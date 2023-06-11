import express from 'express'
import userRoutes from './routes/userRoutes'
import tweetRoutes from './routes/tweetRoutes'
const app=express();
app.use(express.json()); 

app.use("/user",userRoutes) //mounting the userRoutes
app.use("/tweet",tweetRoutes) //mounting the tweetRoutes

//parses all the data to a json
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('hello wfforld');
});

//app.METHOD(PATH, HANDLER)
//get,post,put,delete


app.listen(3000,()=>{
    console.log('server running at port 3000');
});