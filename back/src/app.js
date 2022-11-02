import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
    getWrites,
    getWrite,
    postWrite,
    deleteWrite,
} from "./controller/blogPost";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

app.get("/api/write", getWrites);
app.post("/api/write", postWrite);

app.get("/api/write/:id", getWrite);
app.delete("/api/write/:id", deleteWrite);
