import express from "express";
import bodyParser from "body-parser";
import { check, validationResult } from "express-validator";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

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

app.get("/contact", (req, res) => {
    res.render("contact.ejs", { errors : '' });
});

app.get("/success", (req, res) => {
    res.render("success.ejs");
});

app.post("/send", 
    [
        check('name').notEmpty().withMessage('Name is required'),
        check('email').notEmpty().withMessage('Invalid email address'),
        check('phone').notEmpty().withMessage('Please enter valid phone number'),
        check('message').notEmpty().withMessage('Message required')
    ], (req, res) => {
        

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.render('contact', { errors: errors.mapped() });
    } else {
        const mail_name = req.body.name;
        const mail_email = req.body.email;
        const mail_message = req.body.message;

        const emailMessage = (

            `NAME: ${mail_name},
    
            EMAIL: ${mail_email},
    
            MESSAGE: ${mail_message}`

    );
        const nm_user = process.env.NM_USER;
        const nm_pass = process.env.NM_PASS;
        const cc_email = process.env.CC_EMAIL;
        const nm_serv = process.env.NM_SERV;
        const nm_host = process.env.NM_HOST;
        const nm_ciphers = process.env.NM_CIPHERS;
        const nm_sub = process.env.NM_SUB;

        const transporter = nodemailer.createTransport({
            service : nm_serv,
            host : nm_host,
            port : 587,
            secure : false,
            auth : {
                user : nm_user,
                pass : nm_pass
            },
            tls : {
                    ciphers : nm_ciphers,
            },
        });

        transporter.sendMail({
            from : nm_user,
            to : cc_email,
            subject : nm_sub,
            text : emailMessage,

        },

        (errors, info) => {

            if(errors) {
                console.log(errors);

            } else {
                res.redirect('/success');
            };
        });

    };    
});    

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
});