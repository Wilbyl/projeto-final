const { Sequelize, Datatypes } = require("sequelize");
const database = require("./database");

const Videos = database.sequelize.define(
  "videos",
  {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allNulls: false,
      primaryKey: true,
    },
    Nome: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    categoria: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = Videos;