import React, { useContext } from "react";
import './MainPage.css'
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import { COURSES_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const article1 = '<div>Добро пожаловать на сайт интерактивных онлайн-курсов!</div>'
const article2 = 'Хотите стать профессиональным веб-разработчиком и создавать потрясающие сайты? Наши курсы комбинируют в себе глубокие знания и практическую работу, которые помогут вам овладеть важными навыками и подготовиться к реальным задачам.'
const article3= '{'
const article4 = '}'
const MainPage = () =>{
    const navigate = useNavigate()
    const {user} = useContext(Context)
    return(
        <div className="main_box">
       <div className="main_title">{article1}</div>
       
       <div className="first_page">
       <img className="main_gif_geometry" src =  'http://localhost:5000/geom.gif'></img>
       <div className="logo_box">
       
       <img className="main_logo" src =  'http://localhost:5000/frontend-icon-12.jpg'></img>
       </div>
       <div className="main_description"><a>{article2}</a><div className="button_box"><button className="main_button" onClick={() => {if (user.isAuth) navigate(COURSES_ROUTE); else navigate(LOGIN_ROUTE)}}>Начать обучение</button></div></div>
       </div>
       <div className="second_page">
       <div className="skill_box">
       <div className="main_skills">
        <a className = "first_bracket">{article3}</a>
        <br></br>
        <a className="second_bracket">[</a>
        <br></br>
        <a className="common_skills">"Навыки, которые Вы приобретете":</a><a className="third_bracket">[</a>
        <br></br>
        <a className="skills">"Создание структурированных и организованных веб-страниц и сайтов"<a className="comma">,</a></a>
        <br></br>
        <a className="skills">"Работа с формами в HTML и отправка данных на веб-сервер"<a className="comma">,</a></a>
        <br></br>
        <a className="skills">"Верстка и стилизация веб-страниц с помощью CSS"<a className="comma">,</a></a>
        <br></br>
        <a className="skills">"Разработка мобильных приложений и адаптивных веб-сайтов для всевозможных устройств и экранов"</a>
        <br></br>
        <a className="third_bracket">]</a>
        <br></br>
        <a className="second_bracket">]</a>
        <br></br>
        <a className = "first_bracket">{article4}</a>
       </div>
       <div className="img_box"><img className="kitty_gif" src = 'http://localhost:5000/kitty.gif'></img></div>
       </div>
       <div className="second_box">
       <img className="html_img" src = 'http://localhost:5000/jscsshtml.png'></img>
        <div className="second_text_box"><a className="second_text">Мы считаем, что идеальный способ овладения HTML, JS и CSS - это комбинация теории и практики, поэтому мы разработали курсы, которые сочетают в себе оба подхода. Во время курсов вы будете изучать фундаментальные понятия, а затем использовать их на практике, создавая реальные веб-сайты. Вам будет предоставлен широкий выбор заданий и проектов, которые помогут вам закрепить полученные знания.</a></div>
       </div>
       </div>

       </div>
    )
}
export default MainPage;