const express = require('express');

const router = require('./routers')

const app = express();
const port = 8000;

app.set('view template' , 'ejs');
app.set('views','./views');
//  import router
 app.use('/',router)

app.listen((error)=>{
    if(error){
  console.error(`Error from server`);

    }

console.log(`server is listening on port number ${port}`); 

})