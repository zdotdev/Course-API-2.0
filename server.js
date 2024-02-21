import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import courseRouter from "./routes/router.js";

const app = express()
app.use(cors())

app.use(express.json())

// const courseSchema = new mongoose.Schema({});

// const course = mongoose.model("course", courseSchema)

// mongoose.connect("mongodb://localhost:27017/courses") // /courses to access the specific database
// .then(() => {
//     app.listen(3000)
//     app.get("/", async(req, res) => {
//         try{
//             const data = await course.find();
//             res.status(200).json(data)
//         }
//         catch(err){
//             console.log(err)
//         }
//     })
// })
// .catch((err) => {
//     console.log(err)
// })

app.use("/api", courseRouter)

mongoose.connect("mongodb://localhost:27017/courses")
.then(() => {
    app.listen(3000)
    console.log("Connected to port 3000");
})
.catch((err) => {
    console.log(err)
})