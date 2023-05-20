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
        <>
        <div className="courses_box">
        <div className="course_description">Категорически приветствуем! Пришло время для создания Вашего первого сайта. Не бойтесь экспериментировать, мы всегда поможем!</div>
        <button className="start_button" onClick={() => navigate(COURSE_ROUTE + '/1')}>Начать</button>
        
        <div className="course_box_form">
            {course.courses.map(cours => 
            <div onClick={()=> navigate(COURSE_ROUTE + '/' + cours.id)} key = {cours.id} className="course_item">
                <img className="marker" src =  'http://localhost:5000/marker.png'/>
                <div className="task_title">{cours.id}. {cours.title}</div>
                </div>
            
            )} 
        </div>
        </div>
        </>
    );
});
export default CourseBar;