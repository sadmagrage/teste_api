const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({ origin: "https://teste-front-phi.vercel.app", credentials: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.cookie("teste", "testecookiesaaa").status(200).send("recebido?");
});

app.post("/", (req, res) => {
    const { cookie_para_api } = req.cookies;
    console.log(cookie_para_api)
    res.send(`recebido ${ cookie_para_api }`);
})

const port = 3000;

app.listen(port, () => console.log(`Running on port ${ port }`));