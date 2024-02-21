import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import courseRouter from "./routes/router.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", courseRouter)

mongoose.connect("mongodb://localhost:27017/courses")
.then(() => {
    app.listen(3000)
    console.log("Connected to port 3000");
})
.catch((err) => {
    console.log(err)
})