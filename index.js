const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const port = process.env.PORT;

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("../index.ejs");
});
app.get("/Cadastro", (req, res) => {
  res.render("../views/cadastro.ejs");
});

app.get("/Upload", (req, res) => {
  res.render("../views/upload.ejs");
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));