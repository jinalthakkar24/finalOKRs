#!/usr/bin/env node
const printDirectoryTree = require("./index")
const params    = process.argv.slice(2)
const path      = params[0]
if(params.length < 1){
  console.log("Please provide path to directory")
  process.exit(1)
}
(async ()=>{
  await printDirectoryTree(path)
  process.exit(0)
})()
