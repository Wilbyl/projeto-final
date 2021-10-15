require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const db = require("./model/database");
const port = process.env.PORT;
const Usuario = require("./model");
const Videos = require("./model");
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

app.get("/categorias", (req, res) => {
  res.render("../views/categorias.ejs");
});

app.get("/usuario", async (rec, res) => {
  const usuario = await Usuario.findAll();
  res.json(usuario);
});
app.get("/usuario", async (rec, res) => {
  const videos = await Videos.findAll();
  res.json(videos);
});

app.post("/upload", async (req, res) => {
  const { nome, descricao, link, categorias } = req.body;
  const filme = await Filme.create({ nome, descricao, link, categorias });
  res.render("upload", { filme });
});

app.post("/upload", async (req, res) => {
  const { nome, descricao, link, categorias } = req.body;
  if (!nome) {
    res.render("upload", { mensagem: "Nome é obrigatório" });
  }
  if (!imagem) {
    res.render("upload", { mensagem: "Imagem é obrigatório" });
  } if (!descricao) {
    res.render("upload", { mensagem: "descrição é obrigatório" });
  } if (!link) {
    res.render("upload", { mensagem: "Link é obrigatório" });
  }
  try {
    const filme = await Filme.create({ nome, descricao, link, categorias });
    res.render("upload", { filme });
  } catch (err) {
    console.log(err);
    res.render("criar", { mensagem: "Ocorreu um erro ao cadastrar o Filme!" });
  }
});

db.conectado();
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);

console.log(typeof process.env.DB_PASS);
