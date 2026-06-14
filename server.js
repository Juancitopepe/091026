const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, "files", "archivo.zip");

    res.download(filePath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});
