const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "pradeep.9997@gmail.com",
      pass: "zkpxbjsirxxfxzpm",
    },
  });
exports.saveForm=async (req,res)=>{
    const info = await transporter.sendMail({
        from: '"Enquiry Mail 👻" <pradeep.9997@gmail.com>', // sender address
        to: "pradeeprai.wscube@gmail.com", // list of receivers
        subject: "Enquiry Mail | Wscubetech", // Subject line
        text: "Hello world?", // plain text body
        html: `<table border="1" cellpadding="10">
            <tr>
                <th>Name</th>
                <td>${req.body.fName} ${req.body.lName}</td>
            </tr>
             <tr>
                <th>Email</th>
                <td>${req.body.email}</td>
            </tr>
        </table>`, // html body
      });
    
    res.send({status:1,message:'data Save'})

    
}