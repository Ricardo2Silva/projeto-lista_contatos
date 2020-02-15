  
module.exports = (app) => {
    
    app.get('/lista',(req,res)=>{
        res.send('lista telefonica');


    });

    app.get('/home', (req, res) => {
        res.send('<html><body><h1>Bem Vindo !</h1></body></html>')
    });
        
}



