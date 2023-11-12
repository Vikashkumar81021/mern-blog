const dotenv=require('dotenv')
const express = require("express");
const app = express();
const PORT=process.env.PORT
require ('./db/Connection')
dotenv.config({path:'./config.env'})
// const User=require('./model/Schema')
app.use(express.json())
app.use(require('./router/router'))

app.get('/contact',(req,res)=>{
  res.cookie("jwtoken",'vikash')
  res.send("hello from contact side")
})

const middlewear = (req, res, next) => {
  console.log("helllo i am middlewaer");
  next();
};


app.listen( PORT ||2000, () => {
  console.log(`server is listen ${ PORT}`);
});
