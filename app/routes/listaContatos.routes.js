


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


    app.get('/contatos/:id',(req,res)=>{
      let idContato=req.params.id;
      let contatoRepository= new app.repositories.contatosRepository();

      contatoRepository.buscarPorId(idContato,(err,resultadoQuery)=>{

        if (err) console.log('ocorreu um erro na listagem dos contatos',err);

        res.send(resultadoQuery[0]);

      });



    });

    app.delete('/contatos/:idParaDeletar',(req,res)=>{

      let idContato=req.params.idParaDeletar;
      let contatoRepository= new app.repositories.contatosRepository();

      function callback(erro) {
            if (erro) {
                console.log('ocorreu um erro ao deletar o contato: ', erro);
                
            }

            res.send('contato removido com sucesso!');
        };

        contatoRepository.deletarPorId(idContato, callback);
    });

    app.put('/contatos', (req, res) => {
      let prodObj = req.body;
      let contatoRepository= new app.repositories.contatosRepository();
      
      contatoRepository.atualizar(prodObj, (err) => {
          if (err) {
              console.log('ocorreu um erro ao atualizar o contato: ', err);                
          }

          res.send('contato atualizado com sucesso!');
      });
      
  });



}



