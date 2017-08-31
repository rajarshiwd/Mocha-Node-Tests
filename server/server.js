const express = require('express');
var app = express();

app.get('/',(req,res)=>{
  res.send('hello-world');
});

app.listen(4200);

module.exports = {
  app
}
