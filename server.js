const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, "files", "file1.png");

    res.download(filePath);
});

app.get(["/happybday", "/happybday/"], (req, res) => {
    const filePath = path.join(__dirname, "files", "file2.png");

    res.download(filePath, "file2.png", (err) => {
        if (err) {
            console.error(err);
            return;
        }

        res.redirect("/");
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});
