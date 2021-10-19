require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const db = require("./model/database");
const port = process.env.PORT;
const Usuario = require("./model/index");
const Videos = require("./model/Videos");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views/public")));

app.get("/", async (req, res) => {
  res.render("../index.ejs");
});
app.get("/Cadastro", (req, res) => {
  res.render("../views/cadastro.ejs");
});

app.get("/Upload", (req, res) => {
  res.render("../views/upload.ejs");
});

app.post("/Upload", async (req, res) => {
  const { nome, link, descricao, categoria } = req.body;
  
  res.render("categoria", { video });

  if (!nome) {
    res.render("/Upload", { mensagem: "Nome é obrigatório" });
  }
  if (!link) {
    res.render("/Upload", { mensagem: "link é obrigatório" });
  }
  if (!categoria) {
    res.render("/Upload", { mensagem: "Categoria é obrigatório" });
  }
  try {
    const video = await Videos.create({ nome, link, descricao, categoria });
    res.render("Upload");
  } catch (err) {
    console.log(err);
  
  }
});
app.get("/video/:id", async (req, res) => {
  const video = await Video.findByPk(req.params.id);
  res.render("categoria", { video });
});

app.get("/categorias", async (req, res) => {
  res.render("../views/categorias.ejs");
});

db.conectado();
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);

console.log(typeof process.env.DB_PASS);
