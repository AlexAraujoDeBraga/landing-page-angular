const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/curso-angular-coder'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/curso-angular-coder/index.html')
});

app.listen(PORT, () => {
    console.log("Servidor iniciado na porta " + PORT);
})