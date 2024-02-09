import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// const port: number | = parseInt(process.env.PORT, 10) || 3000;

app.use("/problemset",)

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on http://localhost:${process.env.PORT}`);
});
