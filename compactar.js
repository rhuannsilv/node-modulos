import fs from "fs";
import archiver from "archiver";

function compactarArquivo(diretorio, arquivoZip) {
    const output = fs.createWriteStream(arquivoZip);
    const arquivo = archiver("zip", { zlib: { level: 9 } }); // Nível de compactação

    output.on("close", () => {
        console.log(`Arquivo compactado: ${arquivo.pointer} bytes`); // LOG
    });

    arquivo.on("error", (erro) => {
        throw erro;
    });

    arquivo.pipe(output);
    arquivo.directory(diretorio, false); // compacta o diretório sem incluir a estrutura de pasta principal
    arquivo.finalize();
}

// Pegar data atual
const dataAtual = new Date();
// console.log(dataAtual); // LOG

// Exemplo de uso
const diretorio = "newPast";
const arquivoZip = `${diretorio}.zip`;
// const arquivoZip = `${dataAtual}.zip`;

compactarArquivo(diretorio, arquivoZip);
