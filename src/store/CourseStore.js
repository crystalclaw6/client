import {makeAutoObservable} from "mobx";
export default class CourseStore{
    constructor(){
        this._courses = [
            {id:1, title: 'znakomstvo', description: 'hallo'},
            {id:2, title: 'mewo', description: 'bilo'}
        ]
        this._completedCourses = [
            {id:1, userId:1, courseId:1, grade: 80},
            {id:2, userId:1, courseId:2, grade: 0}

        ]
        makeAutoObservable(this)
    }

    setCourses(courses){
        this._courses = courses
    }
    setCompletedCourses(courses){
        this._completedCourses = courses
    }
    
    get courses() {
        return this._courses
    }
    get completedCourses() {
        return this._completedCourses
    }
}