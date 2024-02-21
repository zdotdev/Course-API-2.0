import Course from "../model/model.js"
import mongoose from "mongoose"

const courseNameAndSpecialization = {
    "_id": 0, 
    "1st Year.description": 1,
    "1st Year.tags": 1,
    "2nd Year.description": 1,
    "2nd Year.tags": 1,
    "3rd Year.description": 1,
    "3rd Year.tags": 1,
    "4th Year.description": 1,
    "4th Year.tags": 1
}


export const getAllCourse = async (req, res) => {
    let course
    try{
        course = await Course.aggregate([
            { $unwind: "$1st Year" },
            { $sort: { "1st Year.description": 1 } },
            { $group: {
                _id: "$_id",
                "1st Year": { $push: "$1st Year" },
                "2nd Year": { $first: "$2nd Year" },
                "3rd Year": { $first: "$3rd Year" },
                "4th Year": { $first: "$4th Year" }
            }},
            { $unwind: "$2nd Year" },
            { $sort: { "2nd Year.description": 1 } },
            { $group: {
                _id: "$_id",
                "1st Year": { $first: "$1st Year" },
                "2nd Year": { $push: "$2nd Year" },
                "3rd Year": { $first: "$3rd Year" },
                "4th Year": { $first: "$4th Year" }
            }},
            { $unwind: "$3rd Year" },
            { $sort: { "3rd Year.description": 1 } },
            { $group: {
                _id: "$_id",
                "1st Year": { $first: "$1st Year" },
                "2nd Year": { $first: "$2nd Year" },
                "3rd Year": { $push: "$3rd Year" },
                "4th Year": { $first: "$4th Year" }
            }},
            { $unwind: "$4th Year" },
            { $sort: { "4th Year.description": 1 } },
            { $group: {
                _id: "$_id",
                "1st Year": { $first: "$1st Year" },
                "2nd Year": { $first: "$2nd Year" },
                "3rd Year": { $first: "$3rd Year" },
                "4th Year": { $push: "$4th Year" }
            }}
        ])
    }
    catch(err){
        console.log(err);
    }
    if(!course){
        res.status(404).json({"erros": "No course found"})
    }
    res.status(200).json({course})
}

export const getCourseNameAndSpecializations = async (req, res) => {
    let course
    try{
        course = await Course.aggregate([
            { $unwind: "$1st Year" },
            { $sort: { "1st Year.description": 1 } },
            { $group: {
                _id: "$_id",
                "1st Year": { $push: "$1st Year" },
                "2nd Year": { $first: "$2nd Year" },
                "3rd Year": { $first: "$3rd Year" },
                "4th Year": { $first: "$4th Year" }
            }},
            { $unwind: "$2nd Year" },
            { $sort: { "2nd Year.description": 1 } },
            { $group: {
                _id: "$_id",
                "1st Year": { $first: "$1st Year" },
                "2nd Year": { $push: "$2nd Year" },
                "3rd Year": { $first: "$3rd Year" },
                "4th Year": { $first: "$4th Year" }
            }},
            { $unwind: "$3rd Year" },
            { $sort: { "3rd Year.description": 1 } },
            { $group: {
                _id: "$_id",
                "1st Year": { $first: "$1st Year" },
                "2nd Year": { $first: "$2nd Year" },
                "3rd Year": { $push: "$3rd Year" },
                "4th Year": { $first: "$4th Year" }
            }},
            { $unwind: "$4th Year" },
            { $sort: { "4th Year.description": 1 } },
            { $group: {
                _id: "$_id",
                "1st Year": { $first: "$1st Year" },
                "2nd Year": { $first: "$2nd Year" },
                "3rd Year": { $first: "$3rd Year" },
                "4th Year": { $push: "$4th Year" }
            }}
        ]).project(courseNameAndSpecialization)
    }
    catch(err){
        console.log(err);
    }
    if(!course){
        res.status(404).json({"erros": "No course found"})
    }
    res.status(200).json({course})
}

export const getBSIS = async (req, res) => {
    let course
    try{
        course = await Course.aggregate([{ $unwind: "$1st Year" },
        { $sort: { "1st Year.description": 1 } },
        { $group: {
            _id: "$_id",
            "1st Year": { $push: "$1st Year" },
            "2nd Year": { $first: "$2nd Year" },
            "3rd Year": { $first: "$3rd Year" },
            "4th Year": { $first: "$4th Year" }
        }},
        { $unwind: "$2nd Year" },
        { $sort: { "2nd Year.description": 1 } },
        { $group: {
            _id: "$_id",
            "1st Year": { $first: "$1st Year" },
            "2nd Year": { $push: "$2nd Year" },
            "3rd Year": { $first: "$3rd Year" },
            "4th Year": { $first: "$4th Year" }
        }},
        { $unwind: "$3rd Year" },
        { $sort: { "3rd Year.description": 1 } },
        { $group: {
            _id: "$_id",
            "1st Year": { $first: "$1st Year" },
            "2nd Year": { $first: "$2nd Year" },
            "3rd Year": { $push: "$3rd Year" },
            "4th Year": { $first: "$4th Year" }
        }},
        { $unwind: "$4th Year" },
        { $sort: { "4th Year.description": 1 } },
        { $group: {
            _id: "$_id",
            "1st Year": { $first: "$1st Year" },
            "2nd Year": { $first: "$2nd Year" },
            "3rd Year": { $first: "$3rd Year" },
            "4th Year": { $push: "$4th Year" }
        }}
    ]).filter({"1st Year.code" : {$regex : "BSIS"}})
    }
    catch(err){
        console.log(err)
    }
    if(!course){
        res.status(404).json({"Error" : "No data found"})
    }
    res.status(200).json({course})
}