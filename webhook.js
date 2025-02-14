const express = require("express");
const { exec } = require("child_process");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Ricevuto webhook:", req.body);
    exec("sh ~/digitaldetox/deploy.sh", (error, stdout, stderr) => {
        if (error) {
            console.error(`Errore nel deploy: ${error.message}`);
            return res.status(500).send("Errore nel deploy");
        }
        console.log(`STDOUT: ${stdout}`);
        console.error(`STDERR: ${stderr}`);
        res.send("Deploy completato!");
    });
});

app.listen(PORT, () => {
    console.log(`Webhook server in ascolto sulla porta ${PORT}`);
});
