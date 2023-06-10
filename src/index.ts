import express from 'express'
import userRoutes from './routes/userRoutes'
import tweetRoutes from './routes/tweetRoutes'
const app=express();
app.use("/user",userRoutes) //mounting the userRoutes
app.use("/tweet",tweetRoutes) //mounting the tweetRoutes

app.use(express.json()); //parses all the data to a json

app.get('/',(req,res)=>{
    res.send('hello wfforld');
});

//app.METHOD(PATH, HANDLER)
//get,post,put,delete


app.listen(5000,()=>{
    console.log('server running at port 5000');
});