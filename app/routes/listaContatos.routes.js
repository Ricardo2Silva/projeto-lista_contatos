let factory=require('../repositories/connectionFactory');


module.exports = (app) => {
    
    app.get('/home',(req,res)=>{
     
      let connection=factory.getConnection();     
      let contatoRepository = new app.repositories.contatosRepository(connection);

      // fluxo: 4
        contatoRepository.listarContatos((err, resultadoQuery) => {
          if (err) console.log('ocorreu um erro na listagem dos contatos:', err);

          res.send(resultadoQuery);
           
            
        });
    
        connection.end();    
        
    
    });      
}



