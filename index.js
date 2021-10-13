require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const db =require("./model/database");
const port = process.env.PORT;
const Usuario= require("./model");
app.use(express.urlencoded({extended: true}));


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views/public")));

app.get("/", (req, res) => {
  res.render("../index.ejs");
});
app.get("/Cadastro", (req, res) => {
  res.render("../views/cadastro.ejs");
});

app.get("/Upload", (req, res) => {
  res.render("../views/upload.ejs");
});

app.get("/usuario",async(rec,res)=>{
  const usuario = await Usuario.findAll();
  res.json(usuario);
});

db.conectado();
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

console.log(typeof process.env.DB_PASS);