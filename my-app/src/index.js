import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { MarkerSeverity } from 'monaco-editor';

ReactDOM.render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>,document.getElementById('root')
);



// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import './App.css';

// import { ControlledEditor } from "@monaco-editor/react";

// const BAD_WORD = "eval";
// const WORNING_MESSAGE = " <- hey man, what's this?";

// function App() {
//   const [value, setValue] = useState("// try to write e%v%a%l somewere 😈 \n");

//   const handleEditorChange = (ev, value) => {
//     setValue(
//       value.includes(BAD_WORD) && !value.includes(WORNING_MESSAGE)
//         ? value.replace(BAD_WORD, BAD_WORD + WORNING_MESSAGE)
//         : value.includes(WORNING_MESSAGE) && !value.includes(BAD_WORD)
//         ? value.replace(WORNING_MESSAGE, "")
//         : value
//     );
//   };
 
//   return (
//     <ControlledEditor
//       height="80vh"
//       width="200vh"
//       className="MonacoEditor"
//       value={value}
//       onChange={handleEditorChange}
//       language="javascript"
//     />
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
