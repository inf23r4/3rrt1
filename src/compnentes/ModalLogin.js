import React, { useState } from 'react'
import "../compnentes/ModalLogin.css"


export const ModalLog =({showModalLog, setShowModalLog})=>{
    return<>{ showModalLog ? <Login/>: null }</>
    
};

function Login() {
    return (
        <div className="container">
            <h2>Login</h2>
            <br/>
            <input type="text" className="form-control" placeholder="Usuario"/>
            <br/>
            <input type="text" className="form-control" placeholder="Contraseña"/>
            <br/>
            <button className="btn btn-dark">Aceptar</button>

        </div>
    )
};

export default Login;

