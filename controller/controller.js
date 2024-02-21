import Course from "../model/model.js"
import mongoose from "mongoose"

export const getAllCourse = async (req, res) => {
    let course
    try{
        course = await Course.find()
    }
    catch(err){
        console.log(err);
    }
    if(!course){
        res.status(404).json({"erros": "No course found"})
    }
    res.status(200).json({course})
}