const express = require("express");
const router = express.Router();
require("../db/Connection");
const User = require("../model/Schema");

router.get("/", (req, res) => {
  res.send("this is home page");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill empty field" });
  }

  try {
    const UserExist = await User.findOne({ email: email }).then(
      async (UserExist) => {
        if (UserExist) {
          return res.status(422).json({ error: "Email already exist" });
        }

        const user = new User({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        });

        await user.save();
        res.status(200).json({ message: "user registered successfully" });
      }
    );
  } catch (error) {
    console.log(error);
  }
});


//LOGIN 
router.post('/signup',async(req,res)=>{
try {
 const {email,password}=req.body
 if(!email || !password){
  return res.status(400).json({error:"Please filled data "})
 }
 const userlogin= await User.findOne({email:email})
 console.log(userlogin);
 if(!userlogin){
  res.status(400).json({message:"user not valid"})
 }else{
  res.json({message:"user login sucessfully"})
 }
} catch (error) {
  console.log(error);
}
})

module.exports = router;
