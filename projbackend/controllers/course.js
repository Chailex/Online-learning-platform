const Course = require("../models/course")
const formidable = require("formidable")
const _ = require("lodash")
const fs = require("fs")



exports.getCourseById = (req, res, next, id) => {
    Course.findById(id)
    // .populate("category")
    .exec((err, course) => {
        if(err){
            return res.status(400).json({
                error: "Course not found"
            })
        }
        req.course = course;
        next();
    })
}

exports.getCourse = (req, res) => {
    req.course.photo = undefined;// we did this because searching for image can take a long time which held up other details
    return res.json(req.course);
}

exports.createCourse = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if(err){
            return res.status(400).json({
                error: "Problem with image"
            })
        }

        //destructure the fields
        const {name, description, price} = fields;
        
        if(
            !name ||!description || !price
        ){
            return res.status(400).json({
                error: "Please include all fields"
            })
        }

        let course = new Course(fields)

        //handle file here
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error: "File size to big!"
                })
            }
            course.photo.data = fs.readFileSync(file.photo.path)
            course.photo.contentType = file.photo.type
        }

        //save to the DB
        course.save((err, course) => {
            if(err){
                return res.status(400).json({
                    error: "Saving t shirt in DB failed!"
                })
            }
            res.json(course)
        })
    })
}



//middleware
exports.photo = (req, res) => {
    if(req.course.photo.data){
        res.set("Content-Type", req.course.photo.contentType)
        return res.send(req.course.photo.data)
    }
    // next();
}

exports.deleteCourse = (req, res) =>{
    let course = req.course;
    course.remove((err, deleteCourse) => {
        if(err){
            return res.status(400).json({
                error: "Failed to delete the course"
            })
        }
        res.json({
            message: "Deletion was a success",
            deleteCourse
        })
    })
}

exports.updateCourse = (req, res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if(err){
            return res.status(400).json({
                error: "Problem with image"
            })
        }

        //updation code
        let course = req.course
        course = _.extend(course, fields)

        //handle file here
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error: "File size to big!"
                })
            }
            course.photo.data = fs.readFileSync(file.photo.path)
            course.photo.contentType = file.photo.type
        }

        //save to the DB
        course.save((err, course) => {
            if(err){
                return res.status(400).json({
                    error: "Saving course in DB failed!"
                })
            }
            res.json(course)
        })
    })
}

exports.getAllCourse = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id"

    Course.find()
        .select("-photo")
        // .populate('category')
        .sort([[sortBy, "asc"]])
        // .limit(limit)
        .exec((err, courses) => {
            if(err){
                return res.status(400).json({
                    error: "No courses found"
                })
            }
            res.json(courses);
        })
}

// exports.getAllUniqueCategories = (req, res) => {
//     Product.distinct("category", {}, (err, category) => {
//         if(err){
//             return res.status(400).json({
//                 error: "No category found"
//             })
//         }
//         res.json(category);
//     })
// }
