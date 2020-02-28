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

ContatoRepository.prototype.buscarPorId = (idContato,callback) =>{

    let connection = factory.getConnection();
    connection.query('SELECT * FROM contato WHERE id = ?', idContato, callback);
    
    connection.end();
}




ContatoRepository.prototype.deletarPorId = (idContato,callback) =>{

    let connection = factory.getConnection();
    connection.query('DELETE FROM contato WHERE id = ?', idContato, callback);
    
    connection.end();
}

ContatoRepository.prototype.atualizar = (produtoObj, callback) => {
    let connection = factory.getConnection();
    connection.query('UPDATE contato SET valor = ?,nome = ?,id_tipo_contato =? where id = ?', [produtoObj.valor, produtoObj.nome,produtoObj.id_tipo_contato,produtoObj.id], callback);
    connection.end();
}

module.exports = () => ContatoRepository;
