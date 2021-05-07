import React, { useState } from 'react'
import "../compnentes/LoginRegistro.css"
import { ModalLog } from "./ModalLogin"
import { ModalReg } from './ModalRegistro';

function LoginRegistro() {

    const [showModalLog, setShowModalLog] = useState (false);

        const openModalLog = () => {
            setShowModalLog(prev => !prev)
        };

    const [showModalReg, setShowModalReg] = useState (false);

        const openModalReg = () => {
            setShowModalReg(prev => !prev)
        };
      return (
        <div className="d-flex justify-content-end">
            <div className="text-center m-3">
                <button className="btn btn-link" type="button" onClick={openModalLog}>inicio</button>
                <ModalLog showModalLog={showModalLog} setShowModalLog={setShowModalLog}/>
            </div>
            <div className="text-center m-3">
                <button className="btn btn-dark" type="button" onClick={openModalReg}>registro</button>
                <ModalReg showModalReg={showModalReg} setShowModalReg={setShowModalReg}/>
            </div>
        </div>
    )
}


export default LoginRegistro;
