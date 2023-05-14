import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { useState } from "react";
import { useEffect } from "react";
const Editor = (props) =>{
  console.log(props.value)
 
    return(
        <div>
          <AceEditor
            placeholder= {"Write your " + (props.lang) + " code here."}
            mode= {props.lang}
            theme= {props.theme}
            name= {(props.lang) + "Edit"}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            onChange={(value) => props.onCodeChange(value)}
            value = {props.value}
            width={"100%"}
            height={"630px"}
            setOptions={{
            useWorker: false,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
            }}/>
            
        </div>
        
    )
}
export default Editor;