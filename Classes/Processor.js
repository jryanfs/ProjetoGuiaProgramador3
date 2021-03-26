class Processor{
    static Process(data){
        let dados = data.split("\r\n");
        let rows = [];

        dados.forEach(index => {
            let row = index.split(',');
            rows.push(row);
        });
        return rows;
    }   
}


module.exports =  Processor;