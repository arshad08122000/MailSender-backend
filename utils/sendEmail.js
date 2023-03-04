const nodemailer=require('nodemailer');

const sendEmail=async(sent_from,send_to,subject,html)=>{
 var transporter = nodemailer.createTransport({
  service: 'gmail.com',
  port: 465,
  secure : true,
  logger : true, 
  secureConnection : true,
  auth: {
   user: process.env.EMAIL_USER,
   //two step authentication app pass key 
   pass: process.env.EMAIL_PASS,
  }
 })

 transporter.sendMail({
  from: sent_from,
  to: send_to,
  subject: subject,
  html:html,
 },function(err,info){
  if(err)
  {
   console.log(err);
  }
  else{
   console.log(info);
  }
 });
};

module.exports=sendEmail;