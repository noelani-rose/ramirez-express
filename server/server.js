// don't need ./ because not looking for folder, knows to look in node modules for express module
const express = require('express');

const app = express();

// listen is a method that takes in two inputs
// first is number, second is function
// similar to onReady function
// nothing below 3000
// own server is called localhost, used for testing 

// takes string as a an input 
// make files in the server/public folder

// do not commit node_modules 

app.use(express.static('./server/public'));


app.listen(3000, function(){
    console.log('we\'re live'); 
});

console.log('in server.js');

