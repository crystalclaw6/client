import { useEffect, useState } from "react";
import React from "react";
import NavBar from "../components/NavBar";
import CourseBar from "../components/CourseBar";
import CodeEditor from "../CodeEditor/Code";
import { useParams } from "react-router-dom";
import { fetchOneCourse } from "../http/courseAPI";
const LessonPage = () =>{
    const [course, setCourse] = useState({info: []})
    const [task, setTask] = useState('')
    const {id} = useParams()
    useEffect(()=>{
        fetchOneCourse(id).then(data => setCourse(data))
        
    }, [])
    let url = 'http://localhost:5000/' + course.task;
    console.log(url)
    fetch(url).then(r => {r.text()}).then(text => setTask(text));
    console.log(task)
    
    return(
        <>
        <div>{task}</div>
       <CodeEditor/>
       </>
    )
}
export default LessonPage;
