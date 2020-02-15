let porta =8080;
let app=require('./config/express')();

app.get('/lista',(req,res)=>{
    res.send('lista telefonica');


});

app.get('/home', (req, res) => {
    res.send('<html><body><h1>Bem Vindo !</h1></body></html>')
});

app.listen(porta,()=>console.log('servidor rodando na porta: ',porta));