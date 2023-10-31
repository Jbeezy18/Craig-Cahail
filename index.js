import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import core from "@actions/core";
import github from "@actions/github";

const app = express();
const port = 3000;


app.use('/public', express.static("public"));
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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});