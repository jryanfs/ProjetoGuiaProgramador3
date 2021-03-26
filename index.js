const Reader = require("./Classes/Reader");
const Processor = require('./Classes/Processor');
const Table = require('./Classes/Table');

const leitor = new Reader();


async function main(){
    let dados = await leitor.Read("./USERS.CSV");
    let processDados = Processor.Process(dados);
    let users = new Table(processDados);
}

main();