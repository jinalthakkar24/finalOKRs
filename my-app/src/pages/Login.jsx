import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    let history = useHistory();
    const [url, setUrl] = useState(null) 
    const [username, setUsername] = useState(null) 
    const [password, setPassword] = useState(null) 
    const submitCall = () => {
        if(url == null || url == "")
        {
            alert("Enter url")
        }
        else{
            console.log("LOGINN" , username, url, password)
            // var formData = new FormData();
            // formData.append("bus_run_id", null);

            // // var formData = new FormData()
            // formData.append("url",username)
            // formData.append("url",password)
            // formData.append("url",url)
            // console.log("FORM DATA: ",(formData))
            // fetch('http://localhost:4000/',{})
        //     fetch('http://localhost:9000/', 
        //     { method: 'POST', body: JSON.stringify({username:username,url:url,password:password}), 
        //     headers : {"Access-Control-Allow-Origin":"*"} 
        // })
        //     .then((response)=>{return response.json()})
        //     .then((response)=>{
        //         // console.log("response", response)
        //         // global.gitData = response
        //         // history.push('/home')
        //     })

        axios.post('http://localhost:9000/', {username:username,url:url,password:password},{ 
              headers : {"Access-Control-Allow-Origin":"*"} 
            })
          .then(function (response) {
              let     arr = []
              arr.push(response.data)


              
                global.gitData = arr
                history.push('/home')
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        

        console.log("LOGINN" , username, url, password)
    }

    
    return(
        <>
            <div>
            <form onSubmit={submitCall}>
                <h1>Enter Details</h1>
                
                <p>Enter Url <input onChange={(e) => setUrl(e.target.value)}  placeholder="Enter Url"></input></p>
                <p>Username <input onChange={(e) => setUsername(e.target.value)} placeholder="Enter username"></input></p>
                <p>Password <input    onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"></input></p>
                
                <button type="button" onClick={submitCall}>Submit </button>

                </form>
            </div>
        </>
    )
}

export default Login