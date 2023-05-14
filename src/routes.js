import { Component } from "react"
import Admin from "./pages/Admin"
import { ADMIN_ROUTE, COURSES_ROUTE, COURSE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SITE_ROUTE } from "./utils/consts"
import LessonPage from "./LessonNav/LessonPage"
import MainPage from "./MainPage/MainPage"
import Auth from "./pages/Auth"
import Courses from "./pages/Courses"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: COURSES_ROUTE,
        Component: Courses
    },
    {
        path: COURSE_ROUTE + '/:id',
        Component: LessonPage
    }
]
export const publicRoutes = [
    {
        path: SITE_ROUTE,
        Component: MainPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
]