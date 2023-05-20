import React, { useContext, useEffect } from "react";
import CourseBar from "../components/CourseBar";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchCourses } from "../http/courseAPI";
import { COURSE_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";
import "./Courses.css"
const Courses = observer(() =>{
    const navigate = useNavigate()
    const {course} = useContext(Context)
    useEffect(() => {
        fetchCourses().then(data => course.setCourses(data))

    },[])
    return(
        <>
        <div className="course_info_box">
            <a className="course_chapter">Часть 1</a>
            <br></br>
            <a className="course_info_title">Основы HTML и CSS</a>
            
            </div>
        <CourseBar />
        </>
    )
})
export default Courses;