const express = require('express');
const app = express();
const PORT = 8081;

// SOMA
app.get("/calculator/soma/:numUm/:numDois", (req, res)=>{
    try {

        const {numUm, numDois} = req.params;
        let soma = parseFloat(numUm) + parseFloat(numDois);

        if (isNaN(numUm) || numUm == undefined || isNaN(numDois) || numDois == undefined) {
            return res.status(400).send("Apenas números devem ser digitados!");
        } 
        res.status(200).send(`A soma é ${soma}`);

    } catch (error) {
        console.error("Erro ao processar os dados enviados");
        res.status(500).send("Erro ao processar os dados enviados");

    };
});

// SUBTRAÇÃO
app.get("/calculator/subtracao/:numUm/:numDois", (req, res)=>{
    try {
        const {numUm, numDois} = req.params;
        let subtracao = parseFloat(numUm) - parseFloat(numDois);

        if (isNaN(numUm) || numUm == undefined || isNaN(numDois) || numDois == undefined) {
            return res.status(400).send("Apenas números devem ser digitados!");
        } 
        res.status(200).send(`A subtração é ${subtracao}`);

    } catch (error) {
        console.error("Erro ao processar os dados enviados");
        res.status(500).send("Erro ao processar os dados enviados");

    }
});

// MULTIPLICAÇÃO
app.get("/calculator/multiplicacao/:numUm/:numDois", (req, res)=>{
    try {
        const {numUm, numDois} = req.params;
        let multiplicacao = parseFloat(numUm) * parseFloat(numDois);

        if (isNaN(numUm)|| numUm == undefined || numUm < 0 || isNaN(numDois) || numDois == undefined || numDois < 0) {
            return res.status(400).send(" Digitar apenas números a partir de 1!");
        } 
        res.status(200).send(`A multiplicação é ${multiplicacao}`);

    } catch (error) {
        console.error("Erro ao processar os dados enviados");
        res.status(500).send("Erro ao processar os dados enviados");

    }
});

// DIVISÃO
app.get("/calculator/divisao/:numUm/:numDois", (req, res)=>{
    try {
        const {numUm, numDois} = req.params;
        let divisao = parseFloat(numUm) / parseFloat(numDois);

        if (isNaN(numUm) || numUm == undefined || numUm < 0 || isNaN(numDois) ||  numDois == undefined || numDois <0 ) {
            return res.status(400).send("Digitar apenas números a partir de 1!");
        } 
        res.status(200).send(`A divisão é ${divisao}`);

    } catch (error) {
        console.error("Erro ao processar os dados enviados");
        res.status(500).send("Erro ao processar os dados enviados");

    }
});


app.listen(PORT, ()=>{
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});