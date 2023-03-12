import "./EnterPage.css";
import {signInWithGoogle } from "../Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase";

export function EnterPage(){
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (error){
            console.log(error.message);
        }
    };

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        } catch (error){
            console.log(error.message);
        }
    };

    
    return(<>
    <h1 className="h1">WELCOME!</h1>
    <div className="Login">
        <h3 className="h3">LOGIN</h3>
        <input placeholder="Email..." onChange={(event) => {setLoginEmail(event.target.value);}}/>
        <input placeholder="PSW: min 6 caracteres" onChange={(event) => {setLoginPassword(event.target.value);}}/>
        <button className="btn" onClick={login}>SIGN IN</button>
        <button className="btn" onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
    </div>
    <div className="Register">
        <h3 className="h3">REGISTER</h3>
        <input placeholder="Email..." onChange={(event) => {setRegisterEmail(event.target.value);}}/>
        <input placeholder="PSW: min 6 caracteres" onChange={(event) => {setRegisterPassword(event.target.value);}}/>
        <button className="btn" onClick={register}>REGISTER</button>
        <button className="btn" onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
    </div>
    </>
    
    );
}
