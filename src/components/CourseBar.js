import { useContext, useState } from "react";
import React from "react";
import { Context } from "..";
import { Link, useNavigate } from "react-router-dom";
import { COURSE_ROUTE, SITE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import './coursebar.css'
const CourseBar = observer(()=>{
    const navigate = useNavigate()
    const {course} = useContext(Context)
    
    return(
        <div className="course_box_form">
            {course.courses.map(cours => 
            <div onClick={()=> navigate(COURSE_ROUTE + '/' + cours.id)} key = {cours.id} className="course_item">{cours.title}</div>
            )} 
        </div>
    );
});
export default CourseBar;