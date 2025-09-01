const express = require('express');
const app = express();
const PORT = 8080;

app.get("/operacao/:tipo", (req, res) => {
    try {
        const { tipo } = req.params;
        let { numUm, numDois } = req.query;
        let resultado;
        numUm = parseFloat(numUm);
        numDois = parseFloat(numDois);

        if (isNaN(numUm) || numUm === undefined || isNaN(numDois) || numDois === undefined) {
            return res.status(400).send("Apenas números devem ser digitados!");
        }

        switch (tipo) {
            case 'soma':
                resultado = numUm + numDois;
                return res.status(200).send(`A soma é ${resultado}`)
                break;

            case 'subtracao':
                resultado = numUm - numDois;
                return res.status(200).send(`A subtracao é ${resultado}`)
                break;

            case 'multiplicacao':
                resultado = numUm * numDois;
                return res.status(200).send(`A multiplicacao é ${resultado}`)
                break;

            case 'divisao':
                resultado = numUm / numDois;
                return res.status(200).send(`A divisao é ${resultado}`)
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

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});