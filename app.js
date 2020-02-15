let porta =8080;
let app=require('./config/express')();

let rotasLista=require('./app/routes/listaContatos.routes')(app);

app.listen(porta,()=>console.log('servidor rodando na porta: ',porta));