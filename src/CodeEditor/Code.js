import { useState } from "react";
import { useMemo } from "react";
import ReactDOM from 'react-dom'
import './CodeStyles.css';
import Editor from "./Editor/Editor.js";
import { useEffect } from "react";
const CodeEditor = () =>{
    const [js, setjs] = useState('')
  const [html, sethtml] = useState('')
  const [css, setcss] = useState('')
  const document = useMemo(() => {
    if (!html && !css && !js) return
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${css}</style>
    </head>
    <body>
        ${html}
        <script>${js}</script>
    </body>
    </html>
    `
  }, [html, css, js])
    const [activeBut, setActiveBut] = useState('html')
    const [theme, setTheme] = useState('tomorrow')
    const [color, setColor] = useState('white')
    function changeTheme(){
        if (theme === 'tomorrow'){
            setTheme('twilight');
            setColor('black');
        }
        else{
            setTheme('tomorrow');
            setColor('white');
        }
    }
    const [iFrameHeight, setHeight] = useState('0px');
   
    return(
        <div className="codeEditor">
            <div className="columnEdit">
            <div className= {"buttonPanel " + color}>
                <button className = {'changeBut ' + (activeBut === 'html' ? 'active ' : '') + color} onClick={()=> setActiveBut('html')}>HTML</button>
                <button className={'changeBut ' + (activeBut === 'javascript' ? 'active ' : '') + color} onClick={()=> setActiveBut('javascript')}>JS</button>
                <button className={'changeBut ' + (activeBut === 'css' ? 'active ' : '')+ color} onClick={()=> setActiveBut('css')}>CSS</button>
                <button className= {"changeBut " + color} onClick ={()=>changeTheme()}>🗘</button>
            </div>
            <div className="editor">
                {activeBut === 'html' ? <Editor theme = {theme} lang = {activeBut} onCodeChange={value => sethtml(value)} value={html} /> : null}
                {activeBut === 'css' ? <Editor theme = {theme} lang = {activeBut} onCodeChange={value => setcss(value)} value={css} /> : null}
                {activeBut === 'javascript' ? <Editor  theme = {theme} lang = {activeBut} onCodeChange={value => setjs(value)} value={js} /> : null}            
            </div>
            </div>
            <div className="columnView">
            <div className="wr">
            <div className="wrapper">
                <div className="he">
              {
                document ? <iframe  className="preview" 
           
                srcDoc ={document}/> : <div className="empty">Your code will be displayed here.</div>
              }
          </div>
          </div></div>
          </div>
            
            
        </div>
    )
}
export default CodeEditor;