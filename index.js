import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { check, validationResult } from "express-validator";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.PORT || 3030;

app.set('view-engine', 'ejs');

app.use('/public', express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/music", (req, res) => {
    res.render("music.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/news", (req, res) => {
    res.render("news.ejs");
});

// app.get("/contact", (req, res) => {
//     res.render("contact.ejs", { errors : '' });
// });

// app.post("/send", 
//     [
//         check('name').notEmpty().withMessage('Name is required'),
//         check('email').isEmail().withMessage('Invalid email address'),
//         check('subject').notEmpty().withMessage('Subject required'),
//         check('message').notEmpty().withMessage('Message required')
//     ], (req, res) => {

//     const errors = validationResult(req);
//     const nm_user = process.env.NM_USER;
//     const nm_pass = process.env.NM_PASS;
//     const cc_email = process.env.CC_EMAIL;

//     if(!errors.isEmpty())
//     {
//         res.render('contact', { errors: errors.mapped() });
//     }
//     else
//     {
//         const transporter = nodemailer.createTransport({
//             service : 'Yahoo',
//             auth : {
//                 user : ,
//             },
//             host : '
//         });

//         const mail_option = {
//             from :
//             subject : 'Booking Inquiry',
//             text : req.body.message
//         };

//         transporter.sendMail(mail_option, (error, info) => {
//             if(error)
//             {
//                 console.log(error);
//             }
//             else
//             {
//                 res.redirect('/success');
//             }
//         });
//     }
// });

// app.get('/sucess', (req, res) => {
//     response.send('<h1>Your Message was Successfully Sent! We Will Get Back To You ASAP!</h1>');
// });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});