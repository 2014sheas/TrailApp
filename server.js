const express = require('express');
const app = express();
const port = 80;
const http = require('http');


const frontEnd = __dirname + "/frontend/"

app.use(express.static(frontEnd));


app.get('/', (req, res) => {
    res.sendFile("index.html",{root: frontEnd});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
