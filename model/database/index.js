const Sequelize= require("Sequelize");

const sequelize = new Sequelize(process.env.DB_BASE,process.env.DB_USER, process.env.DB_PASS,{
    host: process.env.DB_HOST,
    port: 5432 ,
    dialect: "postgres"
});
    async function conectado(){
        try{
            await sequelize.authenticate();
            console.log("conseguiu.");
        }catch(error){
            console.log(error);
        }
    }

    module.exports ={sequelize,conectado};
 