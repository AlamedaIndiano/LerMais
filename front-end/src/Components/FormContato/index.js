import React, { useState } from "react";
import * as Css from "./styled";

import { Menu } from "../Menu";

export const Form_Contato = () => {

    const [ digitouEmail, setDigitouEmail ] = useState(false);
    const [ digitouNumero, setDigitouNúmero ] = useState(false);
    const [ digitouAssunto, setDigitouAssunto ] = useState(false);

    const DigitouEmail = (e) => {
        if(e.target.value){
            setDigitouEmail(true);
        }else {
            setDigitouEmail(false)
        }
    };
    const DigitouNúmero = (e) => {
        if(e.target.value){
            setDigitouNúmero(true);
        }else {
            setDigitouNúmero(false)
        }
    };
    const DigitouAssunto = (e) => {
        if(e.target.value){
            setDigitouAssunto(true);
        }else {
            setDigitouAssunto(false)
        }
    };

    return(
        <Css.Container>
            <Css.ContainerMenu>
                <Menu/>
            </Css.ContainerMenu>
            <Css.ContainerForm>
                <Css.Formulario>
                    <h1>Formulário para Contato</h1>
                    <label>
                        <p>Nome:</p>
                        <input style={{
                            boxShadow:`${digitouNumero? "none" : ""}`, 
                            border: `${digitouNumero? "solid 2px #fafff5" : ""}`,
                            marginTop: `${digitouNumero? "0px" : ""}`
                        }} 
                        type="text"
                        onChange={DigitouNúmero}/>
                    </label>
                    <label>
                        <p>Email:</p>
                        <input style={{
                            boxShadow:`${digitouEmail? "none" : ""}`, 
                            border: `${digitouEmail? "solid 2px #fafff5" : ""}`,
                            marginTop: `${digitouEmail? "0px" : ""}`
                        }} type="text" onChange={DigitouEmail}/>
                    </label>
                    <label>
                        <p>Assunto:</p>
                        <textarea 
                        style={{
                            boxShadow:`${digitouAssunto? "none" : ""}`, 
                            border: `${digitouAssunto? "solid 2px #fafff5" : ""}`,
                            marginTop: `${digitouAssunto? "0px" : ""}`
                        }} 
                        onChange={DigitouAssunto}/>
                    </label>
                    <button>Enviar</button>
                </Css.Formulario>
            </Css.ContainerForm>
        </Css.Container>
    );
};