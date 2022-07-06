const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@nodejs.n70pzut.mongodb.net/?retryWrites=true&w=majority`, 
    (error) => {
        if (error) {
            return console.log('Ocorreu um erro ao se conectar com o banco de dados: ', error);
        };

        return console.log('Conexão feita com sucesso!');
    });
}; 

module.exports = connectToDatabase;