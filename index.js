const express = require('express')
const app = express();
const http = require('http').Server(app);

app.get('/randomNumber', (req, res)=>{
  res.send(`${Math.random()*10}`);
})

http.listen(8000, ()=>{
  console.log('app running...');
});

module.exports = app;