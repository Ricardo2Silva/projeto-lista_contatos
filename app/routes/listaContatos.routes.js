let factory=require('../repositories/connectionFactory');


module.exports = (app) => {
    
    app.get('/home',(req,res)=>{
     
      let connection=factory.getConnection();     
        
            connection.query('select * from contato', (err, resultadoQuery) => {
              
                if (err) console.log('ocorreu um erro na listagem dos contatos:', err);
    
                res.send(resultadoQuery);
            });
    
            connection.end();    
        
    
    });      
}



