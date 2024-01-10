const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



app.post("/sub", (req, res) => {
   let a = parseFloat(req.body.num1);
   let b = parseFloat(req.body.num2);
   let finalSum = a - b;

   res.send({ finalSub: finalSub });
});


module.exports = app; // Export the Express app
