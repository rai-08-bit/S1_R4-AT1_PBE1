const express = require('express');
const app = express();
const PORT = 8081;

app.get("/calculadora/", (req, res)=>{
    try {
        let {operacao, numDois, numUm} = req.query;
        let resultado;
        numUm = parseFloat(numUm);
        numDois = parseFloat(numDois);

        if (isNaN(numUm) || numUm == undefined || isNaN(numDois) || numDois == undefined || operacao == undefined) {
            return res.status(400).send("Apenas números devem ser digitados!");
        } 

        switch(operacao){
            case 'soma':
                resultado = numUm + numDois;
                return res.status(200).send(`A soma é: ${resultado}`);
                break;
            case 'subtracao':
                resultado = numUm - numDois;
                return res.status(200).send(`A subtração é: ${resultado}`);
                break;
            case 'multiplicacao':
                resultado = numUm * numDois;
                return res.status(200).send(`A multiplicação é: ${resultado}`);
                break;
            case 'divisao':
                resultado = numUm / numDois;
                return res.status(200).send(`A divisão é: ${resultado}`);
                break;
            default:
                return res.status(400).send(`Operação inválida! Apenas as 4 operações principais: soma, subtração, divisão e multiplicação`);
                break;
        }

    } catch (error) {
        console.error("Erro ao processar os dados enviados");
        res.status(500).send("Erro ao processar os dados enviados");
    };
});


app.listen(PORT, ()=>{ // retorna o valor para outra função (callback)
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});