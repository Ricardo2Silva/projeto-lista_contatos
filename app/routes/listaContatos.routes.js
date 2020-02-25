


module.exports = (app) => {
    
    app.get('/home',(req,res)=>{
      
      let contatoRepository = new app.repositories.contatosRepository();

      // fluxo: 4
        contatoRepository.listarContatos((err, resultadoQuery) => {
          if (err) console.log('ocorreu um erro na listagem dos contatos:', err);

          res.send(resultadoQuery);
           
            
        });
    
       
        
    
    });      
}



