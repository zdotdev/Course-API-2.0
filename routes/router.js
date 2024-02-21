import express from "express"
import { getAllCourse } from "../controller/controller.js"

const courseRouter = express.Router()

courseRouter.get("/", getAllCourse)

export default courseRouter