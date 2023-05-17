import React, { useContext, useState } from "react";
import { Context } from "../..";
import { createCourse } from "../../http/courseAPI";
import { observer } from "mobx-react-lite";
const CreateCourse = observer(() =>{
    const {course} = useContext(Context)
    const [titleInp, setTitleInp] = useState('')
    const [descriptionInp, setDescriptionInp] = useState('')
    const [codeFile, setCode] = useState(null)
    const [taskFile, setTask] = useState(null)
    const selectCode = e => {
        setCode(e.target.files[0])
    }
    const selectTask = e => {
        setTask(e.target.files[0])
    }
    const addCourse = () => {
        const formData = new FormData()
        formData.append('title', titleInp)
        formData.append('description', descriptionInp)
        formData.append('task', taskFile)
        formData.append('code', codeFile)
        
        createCourse(formData)
    }
    return(
        <div>
            <input type="text" placeholder="Введите e-mail" className="action_form" value = {titleInp} onChange={e => setTitleInp(e.target.value)}></input>
            <input type="text" placeholder="Введите e-mail" className="action_form" value = {descriptionInp} onChange={e => setDescriptionInp(e.target.value)}></input>
            <input type="file" placeholder="Введите e-mail" className="action_form" onChange={selectTask}></input>
            <input type="file" placeholder="Введите e-mail" className="action_form" onChange={selectCode}></input>
            <button onClick={addCourse}>добавить курс</button>
        </div>
    )
})

export default CreateCourse;