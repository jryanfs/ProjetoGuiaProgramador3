const Reader = require("./Classes/Reader");
const Processor = require('./Classes/Processor');
const Table = require('./Classes/Table');
const HtmlParser =  require('./Classes/HtmlParser');
const Writer = require("./Classes/Writer");

const leitor = new Reader();
const escritor = new Writer();

async function main(){
    let dados = await leitor.Read("./USERS.CSV");
    let processDados = Processor.Process(dados);
    let users = new Table(processDados);
    let html = await HtmlParser.parser(users);
    escritor.Write("meuhtmlgerado.html",html);
}

main();