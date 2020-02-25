let factory=require('./connectionFactory');

// fluxo: 3
function ContatoRepository() {};


// vamos adicionar as operacao de banco de dados que lidam com contatos
// fluxo: 5
ContatoRepository.prototype.listarContatos = (callback) => {
    let connection=factory.getConnection();
    
    
    connection.query('select * from contato', callback);

    connection.end();
}

ContatoRepository.prototype.inserirContato = (contato, callback) =>{

    let connection =factory.getConnection();
    connection.query ('INSERT INTO contato SET ?',contato,callback);

    connection.end();

}







module.exports = () => ContatoRepository;
