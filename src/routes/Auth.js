import { async } from "@firebase/util";
import React, { useState } from "react";
import {authService} from "fbase";
import {
    //getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    } from 'firebase/auth';

const Auth=() => {


    const [email, setEamil] = useState("");
    const [password, setPasword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");

    const onChange=(event)=>{

       // console.log(event.target.name);
        const {target: {name, value}} = event;

        if (name==="email"){
            setEamil(value);
        }else if (name==="password"){
            setPasword(value);
        }
    };

    const toggelAccount=()=>{
        setNewAccount(!newAccount);
    }

    const onSubmit= async (event)=>{
        event.preventDefault();
        //console.log("submit");
        let data; 

        try{
            if (newAccount) {
                data = await createUserWithEmailAndPassword(authService, email, password);
            } else {
                data = await signInWithEmailAndPassword(authService, email, password);
            }
            //console.log("aaa");
            console.log(data);
        }
        catch(error){
            //console.log(error)
            setError(error.message);
        }
    };


    const socialLogin=(event)=>{
       
        const {name, value}= event.target;

        console.log(name);

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" placeholder="EMail" required value={email} onChange={onChange}/>
                <input type="password" name="password" placeholder="Password" required value={password}  onChange={onChange}/>
                <input type="submit" value={newAccount? "Sign up": "Sign in"} />
                {error}
            </form>

            <span onClick={toggelAccount}>{newAccount?"Sign In":"Sing Up"}</span>

            <div>
                <button name="googleLogin" onClick={socialLogin}>Contiune with Github</button>
                <button name="githubLogin" onClick={socialLogin}>Contiune with Google</button>
            </div>
        </div>
    )
}

export default Auth;