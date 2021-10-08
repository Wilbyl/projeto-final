const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("../index.ejs");
});
app.get("/Cadastro", (req, res) => {
  res.render("../views/cadastro.ejs");
});
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));