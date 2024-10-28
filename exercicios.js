import fs from 'fs';
const diretiretorio = 'Diretorio1';

function criarArquivo(){
    fs.writeFileSync(`${diretiretorio}/arquivo.txt`, `meu arquivo do ${diretiretorio}`, (erro) => {
        if(erro){
            console.error('deu pau', erro)
            return
        }
        console.log('arquivo criado com sucesso')
    })
}

function criarDiretorio(){
   
    fs.mkdir(diretiretorio, (erro) => {
        if(erro){
            console.error('deu pau', erro)
            return
        }

        console.log('diretorio criado')
    })

}

function removerDiretorio(){
    fs.rm(diretiretorio, {recursive: true}, (erro) => {
        if(erro){
            console.error('deu pau', erro)
            return
        }
    })
    console.log('diretorio deletado')
}


//-------------------- funçoes ------------------ //

// criarDiretorio();
// criarArquivo();
removerDiretorio();