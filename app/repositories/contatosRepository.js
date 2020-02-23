
let conn;

// fluxo: 3
function ContatoRepository(connection) {
    conn = connection;
}

// vamos adicionar as operacao de banco de dados que lidam com contatos
// fluxo: 5
ContatoRepository.prototype.listarContatos = (callback) => {
    conn.query('select * from contato', callback);
}

module.exports = () => ContatoRepository;