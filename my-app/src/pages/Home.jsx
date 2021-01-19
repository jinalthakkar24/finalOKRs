import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import JSONTree from 'react-json-tree'
// import FolderTree from 'react-folder-tree';
// import "bootstrap/dist/css/bootstrap.min.css";


import { ControlledEditor } from "@monaco-editor/react";
import '../App.css';

const BAD_WORD = "eval";
const WORNING_MESSAGE = " <- hey man, what's this?";

const Home = () => {
    const [value, setValue] = useState("// try to write e%v%a%l somewere 😈 \n");
  const handleEditorChange = (ev, value) => {
    setValue(
      value.includes(BAD_WORD) && !value.includes(WORNING_MESSAGE)
        ? value.replace(BAD_WORD, BAD_WORD + WORNING_MESSAGE)
        : value.includes(WORNING_MESSAGE) && !value.includes(BAD_WORD)
        ? value.replace(WORNING_MESSAGE, "")
        : value
    );
  };
  const data = global.gitData
 
  const theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633'
  };

  
     
  return (
      <>
      <div className="col-sm-12">
          <div className="row">
              { <div className="col-sm-4 mt-5">
              { <JSONTree data={data} theme={theme} invertTheme={false} />} 
            
              </div> }
              
              <div className="col-sm-8 mt-5 w-50">
              <ControlledEditor
      height="80vh"
      width="100vh"
      className="MonacoEditor"
      value={value}
      onChange={handleEditorChange}
      language="javascript"
    />
              </div>
          </div>

   
    </div>
    </>
  );

}

export default Home

