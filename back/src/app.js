import express from "express";
import path from "path";

const app = express();

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

// const path = require("path");
// app.set("views", path.join(__dirname, "views"));
// app.set("views", process.cwd() + "/src");

app.get("/", (req, res) => {
    return res.send("hi");
});

console.log(process.cwd());
