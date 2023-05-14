import { useContext, useState } from "react";
import { Context } from "..";
import { Link } from "react-router-dom";
import { SITE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
const CourseBar = observer(()=>{
    const {course} = useContext(Context)
    return(
        <div>
            {course.courses.map(cours => 
                <div key = {cours.id}>{cours.title}</div>
                )}
        </div>
    )
})
export default CourseBar;