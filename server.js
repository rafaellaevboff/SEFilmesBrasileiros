const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors"); // Importe o pacote 'cors'

app.use(express.json());

// Configurar o middleware CORS
app.use(cors());

app.use(express.json());

const variables = [];
const rules = [];

// Rota para adicionar uma variável
app.post("/addvariable", (req, res) => {
    const { name, value } = req.body;
    variables.push({ name, value });
    res.status(201).json({ message: "Variável adicionada com sucesso" });
});

// Rota para listar variáveis
app.get("/variables", (req, res) => {
    res.json(variables);
});

// Rota para adicionar uma regra
app.post("/addrule", (req, res) => {
    const { regras } = req.body;
    rules.push({ regras });
    res.status(201).json({ message: "Regra adicionada com sucesso" });
});

// Rota para listar regras
app.get("/rules", (req, res) => {
    res.json(rules);
});

app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`);
});

