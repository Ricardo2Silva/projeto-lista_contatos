  
module.exports = (app) => {
    
    app.get('/lista',(req,res)=>{
       
     let mysql = require('mysql');
    
        const dadosConexao = {
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'contatos'
            }

            let connection = mysql.createConnection(dadosConexao);
        
            connection.query('select * from contato', (err, resultadoQuery) => {
              
                if (err) console.log('ocorreu um erro na listagem dos contatos:', err);
    
                res.send(resultadoQuery);
            });
    
            connection.end();    
        
    
    });      
}



