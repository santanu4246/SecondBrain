import express from "express";
import cors from "cors";
import { db } from "./db";
import { PORT } from "./config/utils";
import userRouter from "./router/user.router"
const app = express();
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ msg: "hello" })
})
app.use("/", userRouter)
app.listen(PORT, () => {
    db()
    console.log(`Server is listening http://localhost:${PORT}`)
})