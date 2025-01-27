
import nodemailer from "nodemailer";

const smtpTransport = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE || undefined, // Use only if needed
    host: process.env.NODEMAILER_HOST ,
    port: Number(process.env.NODEMAILER_PORT) || 587,
    secure: process.env.NODEMAILER_PORT === "465", // SSL for port 465
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});
type mailBody={
    email:string,
    subject:string,
    to:string|undefined,
    message:string
}

async function sendMailToAdmin(sender:mailBody){
    try{
        var mailOptions = {
            from: "kazuyakazami19@gmail.com",
            to: "kazuyakazami19@gmail.com", 
            subject: sender.subject,
            text: sender.message
        }
       await smtpTransport.sendMail(mailOptions);
       console.log("sent!");
    }
    catch(err:any){
        console.log(err.message);
    }
}

export default sendMailToAdmin; 