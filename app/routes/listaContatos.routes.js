


module.exports = (app) => {
    
    app.get('/home',(req,res)=>{
      
      let contatoRepository = new app.repositories.contatosRepository();

      // fluxo: 4
        contatoRepository.listarContatos((err, resultadoQuery) => {
          if (err) console.log('ocorreu um erro na listagem dos contatos:', err);

          res.send(resultadoQuery);
           
            
        });
    
       
        
    
    }); 
    
    
    app.post('/contatos', (req, res) => {        
        let corpoRequest = req.body;
        let contatoRepository = new app.repositories.contatosRepository();

      contatoRepository.inserirContato(corpoRequest, (err) => {
            if (err) console.log('ocorreu um erro na insercao do contato:', err);

            res.send('contato inserido com sucesso');
        });

    });

}



