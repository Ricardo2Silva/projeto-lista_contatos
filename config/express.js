
let app= require('express')();
let expressLoad=require('express-load');

module.exports= ()=>{
    console.log('carregando o modulo express');

    
    expressLoad('routes', {cwd: 'app'})
        .then('repositories')
        .into(app);

   
    return app;
}