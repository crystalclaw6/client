import { _allowStateChangesInsideComputed } from "mobx";
import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"
export const createCourse = async (course) => {
    const {data} = await $authHost.post('api/course', course)
    return data
}
export const fetchCourses = async () => {
    const {data} = await $host.get('api/course')
    return data
}
export const fetchOneCourse = async (id) => {
    const {data} = await $host.get('api/course/' + id)
    return data
}
/*
Student.findOne({where: {name: "Tom"}})
.then(student=>{
    if(!student) return;
    student.getCourses().then(courses=>{
        for(course of courses){
            console.log(course.name);
        }
    });
});
*/