const express = require('express');
const app = express();
const PORT = 8081;

app.get("/saudacao/:nome", (req, res) => {
    try {
        const {nome} = req.params;
        let {hora} = req.query;

        if (!isNaN(nome) || nome == undefined) {
            return res.status(400).send("Apenas letras devem ser digitados!");
        };

        if (hora >=6 && hora <= 11) {
            return res.status(200).send(`Bom dia, ${nome}`);
        } else if (hora >= 12 && hora <19) {
            return res.status(200).send(`Boa tarde, ${nome}`);
        } else {
            return res.status(200).send(`Boa noite, ${nome}`);
        };

    } catch (error) {
        console.error("Erro ao processar os dados enviados");
        res.status(500).send("Erro ao processar os dados enviados");
    };
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});