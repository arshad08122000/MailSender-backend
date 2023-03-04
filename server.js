const bodyparser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv').config();
const express=require('express');
const sendEmail=require('./utils/sendEmail');


const app=express();
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());


const port=process.env.PORT || 8000;

app.listen(port, function(req, res) {
 console.log(`Listening at ${port}`);
});

app.get('/',function(req,res){
 res.send("React MailSender");

});

app.post('/mail',async(req,res)=>{
 const {email,description}=req.body;
 console.log("Email :",email)
 console.log("Description :",description);
 try{
  await sendEmail(process.env.EMAIL_USER,email,"React MailSender Project",
  `<h1>React Mail Sender Project</h1><p>${description}</p>
  <a href="http://localhost:3000">Go To MailSender</a>`);
  res.status(200).send({ Success: true, message: "Mail Sent" })
  console.log("Email Delievered");
 }
 catch(error)
 {
  console.log("Error :",error);
 }
});