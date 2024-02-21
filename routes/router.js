import express from "express"
import { getAllCourse, getBSIS, getBSIT, getCourseNameAndSpecializations } from "../controller/controller.js"

const courseRouter = express.Router()

courseRouter.get("/sortedCourse", getAllCourse)
courseRouter.get("/courseAndSpecializations", getCourseNameAndSpecializations)
courseRouter.get("/BSIS", getBSIS)
courseRouter.get("/BSIT", getBSIT)

export default courseRouter