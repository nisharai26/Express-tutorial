const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.set('view engine','hbs');

// app.set('view engine','handlebars');
// console.log(app.get('view engine'));
console.log(app.get('views'));

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.render('index');
});
app.get ('/about' ,(req,res)=>{
    res.render('about');
    });


app.listen(PORT,()=>{
    console.log(`listing to the ${PORT}`); 
});