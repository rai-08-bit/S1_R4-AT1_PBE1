const express = require('express');
const app = express();
const PORT = 8081;

app.get("/ano/:ano", (req, res) => {
    try {
        const { ano } = req.params;

        if (isNaN(ano) || ano == undefined) {
            return res.status(400).send("Apenas números devem ser digitados!");
        };

        if (ano % 4 == 0) {
            return res.status(200).send(`O ano de ${ano} é bissexto`);
        } else {
            return res.status(200).send(`O ano de ${ano} não é bissexto`);
        };

    } catch (error) {
        console.error("Erro ao processar os dados enviados");
        res.status(500).send("Erro ao processar os dados enviados");
    };
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});