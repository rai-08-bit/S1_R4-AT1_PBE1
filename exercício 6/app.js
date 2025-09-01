const express = require('express');
const app = express();
const PORT = 8081;

app.get("/imc", (req, res) => {
    try {
        const peso = parseFloat(req.query.peso);
        const altura = parseFloat(req.query.altura);
        
        if ( isNaN(peso) || isNaN(altura) || peso == undefined || altura == undefined) {
            return res.status(400).send("Apenas números devem ser digitados!");
        }

        let imc = peso/(altura*altura);

        if (imc < 18.5) {
            return res.status(200).send("Você está abaixo do peso, cuidado!");
        } else if (imc <24.9) {
            return res.status(200).send("Parabéns, você está dentro do peso esperado!");
        } else if (imc < 29.9) {
            return res.status(200).send("Cuidado, você está no sobrepeso!");
        } else {
            return res.status(200).send("Cuidado, você está no grau de obesidade!");
        };

    } catch (error) {
        console.error("Erro ao processar os dados enviados");
        res.status(500).send("Erro ao processar os dados enviados");
    }
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});