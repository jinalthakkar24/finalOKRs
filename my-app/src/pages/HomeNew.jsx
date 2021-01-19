import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import JSONTree from 'react-json-tree'
// import FolderTree from 'react-folder-tree';
// import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";
import styled from "styled-components";


import { ControlledEditor } from "@monaco-editor/react";
// import '../App.css';


const FILE_ICONS = {
  js: <DiJavascript1 />,
  css: <DiCss3Full />,
  html: <DiHtml5 />,
  jsx: <DiReact />
};

const StyledTree = styled.div`
  line-height: 1.5;
`;
const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;
const StyledFolder = styled.div`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;
const Collapsible = styled.div`
  height: ${p => (p.isOpen ? "auto" : "0")};
  overflow: hidden;
`;

const File = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <StyledFile>
      {/* render the extension or fallback to generic file icon  */}
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span>
    </StyledFile>
  );
};

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        <AiOutlineFolder />
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

const TreeRecursive = ({ data }) => {
  // loop through the data
  return data.map(item => {
    // if its a file render <File />
    if (item.type === "file") {
      return <File name={item.name} />;
    }
    // if its a folder render <Folder />
    if (item.type === "folder") {
      return (
        <Folder name={item.name}>
          {/* Call the <TreeRecursive /> component with the current item.childrens */}
          <TreeRecursive data={item.children} />
        </Folder>
      );
    }
  });
};
console.log("Git data" , global.gitData)
const Tree = ({ data, children }) => {
  const isImparative = data && !children;

  return (
    <StyledTree>
      {isImparative ? <TreeRecursive data={data} /> : children}
    </StyledTree>
  );
};

Tree.File = File;
Tree.Folder = Folder;

const structure = global.gitData


const BAD_WORD = "eval";
const WORNING_MESSAGE = " <- hey man, what's this?";

const HomeNew = () => {
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
              {/* { <JSONTree data={data} theme={theme} invertTheme={false} />}  */}
              <div className="App">
      <Tree data={global.gitData} />
    </div>
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

export default HomeNew

