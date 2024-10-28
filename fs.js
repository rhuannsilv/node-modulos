// const fs = require('fs');
import fs from "fs";

const encoding = 'utf8';
let path = '/';
const nomeArquivo = `${path}exemplo.txt`;

function criarArquivo() {
    const texto = "1. Escrevendo num arquivo utilizando Node.js";

    // Escreve: nome_arquivo, conteúdo, erro
    fs.writeFileSync(path + nomeArquivo, texto, (erro) => {
        if (erro) {
            console.error("Erro ao escrever no arquivo: ", erro); // LOG
            return; // Early return (retorno precoce)
        }

        console.warn("Arquivo escrito com sucesso!"); // LOG
    });
}

function lerArquivo() {
    fs.readFileSync(nomeArquivo, encoding, (erro, dados) => {
        if (erro) {
            console.error("Erro ao ler o arquivo: ", erro); // LOG
            return;
        }

        console.log("Conteúdo do arquivo: ", dados); // LOG
    });

    // Teste para verificar que assincronismo
    // console.log("2. Teste de Async"); // LOG
}

function adicionarConteudo() {
    const novoTexto = "\nConteúdo adicional.";

    console.log(nomeArquivo); // LOG
    return;

    fs.appendFileSync(nomeArquivo, novoTexto, (erro) => {
        if (erro) {
            console.error("Erro ao adicionar o novo conteúdo: ", erro); // LOG
            return;
        }
        
        console.log("Conteúdo adicionado com sucesso!"); // LOG
    });
}

function excluirArquivo() {
    fs.unlink(nomeArquivo, (erro) => {
        if (erro) {
            console.error("Erro ao excluir o novo conteúdo: ", erro); // LOG
            return;
        }
        
        console.log("Arquivo excluído"); // LOG
    });
}

function criarDiretorio() {
    const novaPasta = 'newPast';

    fs.mkdirSync(novaPasta, (erro) => {
        if (erro) {
            console.error("Erro ao criar o novo diretório: ", erro); // LOG
            return;
        }
        
        console.log("Diretório criado"); // LOG
    });

    path = `${novaPasta}/`;
}


/* ===== Chamadas das Functions ===== */
// criarArquivo();
// lerArquivo();
// adicionarConteudo();
// excluirArquivo();
criarDiretorio();
