const readdir = require('fs').promises.readdir
const stat    = require('fs').promises.stat
const join    = require('path').join

const isDirectory = async function(path){
  let output = false;
  try{
    output = (await stat(path)).isDirectory()
  }catch(err){
    if(err.code !== "ENOENT") throw err
  }
  return output
}

const readRecursive = async function(path){
  let files  = await readdir(path)
  let output =  []
  for(let file of files){
    output.push(file)
    let deepPath = join(path,file)
    if( await isDirectory(deepPath) ){
      output.push( await readRecursive(deepPath) )
    }
  }
  return output
}

const arrayToTreeString = function(arr,level = 0){
  let output  = ""
  let size    = arr.length
  arr.forEach( (item , index) =>{
    output += Array(level)
      .fill("\-")
      .join("")
    if(Array.isArray(item)){
      output += arrayToTreeString(item,level+1)
    }else{
      output += item + "\n"
    }
  })
  return output
}

const printDirectoryTree = async function(path){
  const tree = arrayToTreeString(
    await readRecursive(path)
  )
  console.log(tree)
}

module.exports = printDirectoryTree
