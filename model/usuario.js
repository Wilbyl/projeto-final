const database= require("./database");

const Usuario = database.sequelize.define("Usuario",{

    ID:{

    },
    NOME:{

    }
},{
    freezeTableName: true,
    timesTamps:false,
    createdAt:false,
    updatedAt:false
});