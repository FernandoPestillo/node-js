const fs = require('fs');
const path = require('path');

// Criar pasta
/* fs.mkdir(path.join(__dirname, '/PASTA NOVA'), (error) => {
    if(error) {
    return    console.log('Erro: ', error);
    }

    console.log('Pasta criada com sucesso!')
}) */


//Criar arquivo
/* fs.writeFile(path.join(__dirname, '/PASTA NOVA', 'texto.txt'), 'Hello moto', (error) =>{
    if(error) {
        console.log('Erro: ', error);
    }

    console.log('Arquivo criado com sucesso');

    // Adicionar a um arquivo
    fs.appendFile(path.join(__dirname, '/PASTA NOVA', 'texto.txt'), ' PAM PAM', (error) =>{
        if (error) {
            return console.log('Erro: ', error)
        }

        console.log('Arquivo modificado com sucesso');
    });

    // Ler arquivo
    fs.readFile(path.join(__dirname, '/PASTA NOVA', 'texto.txt'), 'utf8', (error,data) =>{
        if (error) {
            return console.log('Erro: ', error)
        }

        console.log(data)
    });
}) */