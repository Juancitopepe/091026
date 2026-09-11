const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, "files", "file1.png");

    res.download(filePath);
});

app.get(["/happybday", "/happybday/"], (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title></title>
        </head>
        <body>
            <script>
                const link = document.createElement("a");
                link.href = "/happybday/download";
                link.download = "file2.png";
                document.body.appendChild(link);
                link.click();

                setTimeout(() => {
                    window.location.href = "/";
                }, 100);
            </script>
        </body>
        </html>
    `);
});

app.get("/happybday/download", (req, res) => {
    const filePath = path.join(__dirname, "files", "file2.png");
    res.download(filePath, "file2.png");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});
