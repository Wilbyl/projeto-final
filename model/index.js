
const {Sequelize, Datatypes}=require("sequelize");
const database= require("./database");
const Usuario = database.sequelize.define("usuario",{

    ID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allNulls: false,
        primaryKey: true,
    },
    Nome:{
        type:Sequelize.STRING,
        allowNull: false,

    }
},{
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = Usuario;
/* ler sobre find one*/