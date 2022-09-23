import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom";

import "./App.css";

function App() {

  var data = new FormData();

  const [email , setEmail] = useState('');

  const [password , setPassword] = useState('');

  const [confPassword , setConfPassword] = useState('');

  // function to update state of email with value

  // enter by user in form

  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }

    // function to update state of password with 

    // value enter by user in form

  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }

    // function to update state of confirm password 

    // with value enter by user in form

  const handleConfPasswordChange =(e)=>{
    setConfPassword(e.target.value);
  }

  // below function will be called when user 

  // click on submit button .
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    };
    const fetchToUser = async () => {
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(async (response) => console.log("response:", await response))
        .catch((e) => console.log(e));
    };
    await fetchToUser();
    console.log("ok");
  };
  return (
    <form>
      <label>
        Email :
        <input type="text" name="email" onChange={handleEmailChange}/>
      </label>
      <label>
        Mot de passe :
        <input type="text" name="password" onChange={handlePasswordChange} />
      </label>
      <input type="submit" value="Envoyer" onClick={handleSubmit} />
    </form>
  );
    

}



export default App;