
let app= require('express')();
let expressLoad=require('express-load');
let bodyParser=require('body-parser');

module.exports= ()=>{
    console.log('carregando o modulo express');

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json());
    
    expressLoad('routes', {cwd: 'app'})
        .then('repositories')
        .into(app);

   
    return app;
}