import express from "express";
import cors from "cors";
import { db } from "./db";
import { PORT } from "./config/utils";

const app = express();
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ msg: "hello" })
})
app.listen(PORT, () => {
    db()
    console.log(`Server is listening http://localhost:${PORT}`)
})