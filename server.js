let http=require('http');
let servidor=http.createServer((req,resp)=>{

if (req.url='/home'){
    resp.end('respondendo ao request');

}
});

servidor.listen(3030)

console.log('servidor rodando na porta 3000');
