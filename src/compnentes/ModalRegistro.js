import React, { useState } from 'react'
import "../compnentes/ModalRegistro.css"


export const ModalReg=({showModalReg, setShowModalReg})=>{
    return<>{ showModalReg ? <Registro/>: null }</>
    
};

function Registro() {
    return (
        <div className="container">
            <h2>Ingrese Datos</h2>
            <br/>
            <input type="text" className="form-control" placeholder="Usuario"/>
            <br/>
            <input type="email" className="form-control" placeholder="Email"/>
            <br/>
            <input type="contraseña" className="form-control" placeholder="Contraseña"/>
            <br/>
            <button className="btn btn-dark">Aceptar</button>

        </div>
    )
};

export default Registro;