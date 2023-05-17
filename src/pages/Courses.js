import React, { useContext, useEffect } from "react";
import CourseBar from "../components/CourseBar";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchCourses } from "../http/courseAPI";
import { COURSE_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const Courses = observer(() =>{
    const navigate = useNavigate()
    const {course} = useContext(Context)
    useEffect(() => {
        fetchCourses().then(data => course.setCourses(data))
    },[])
    return(
        <>
        
        <CourseBar />
        </>
    )
})
export default Courses;