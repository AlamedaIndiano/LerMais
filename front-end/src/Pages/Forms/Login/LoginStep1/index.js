import React, { useEffect, useState } from "react";
import * as Css from "../style";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../../Contexts/ContextCadastrar/FormContext";
import { Theme } from "../../../../Components/Theme/Login";
import { api } from "../../../../Config/api";

const CadastroStep2 = () => {
    const History = useHistory();
    const { state, dispatch } = useForm();

    const [digiteEmail, setDigiteEmail] = useState('Email');
    const [ColorErro, setColorErro] = useState('25cd89');

    const ProxímaStep = async () => {

        const EmailValidar = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(state.email !== '' && EmailValidar.test(String(state.email).toLowerCase()) === true){
            
            const Headers = {
                'Content-Type': 'application/json'
            };

            await api.post('/Validar_Email', {state}, {Headers})
            .then((response) => {
                if(response.data.erro === true) {
                    History.push('/LoginStep2');
                } else {
                    const Admin = async () => {
                        await api.post("/Validar_Email_Admin", {state}, {Headers})
                        .then((response) => {
                            if(response.data.erro === true){
                                History.push('/LoginStep2Admin');
                            } else {
                                setDigiteEmail(response.data.MensagemLogin);
                                setColorErro('#c40000');
                            };
                        }).catch(() => {
                            setDigiteEmail("Tente mais tarde!");
                            setColorErro('#c40000');
                        });
                    };

                    Admin();
                };
            });

        } else {
            setDigiteEmail('Por favor, informe um Email válido!')
            setColorErro('#c40000');
        };
    };

    const VoltarStep = () => {
        dispatch({
            type: "setEmail",
            payload: ""
        });

        History.push("/");
    };

    const DigitouEmail = (e) => {
        dispatch({
            type: "setEmail",
            payload: e.target.value
        });
    };

    useEffect(() => {
        dispatch({
            type: "setStep",
            payload: 1
        });
    }, [dispatch]);

    const TextErro = {
        color: `${ColorErro}`
    };
    const BorderBotomErro = {
        border: `2px solid ${ColorErro}`
    };

    return(
        <Theme>
            <Css.Container>
                <p>Passo 1/2</p>
                <h1>Por favor, informe o seu Email</h1>
                <p>Preencha o campo a baixo com seu Email.</p>

                <hr />

                <label>
                    <p style={TextErro}>{digiteEmail}</p>
                    <input 
                        type="email"
                        autoFocus
                        value={state.email}
                        placeholder="Email@gmail.com"
                        onChange={DigitouEmail}
                        style={BorderBotomErro}
                    />
                </label>

                <Css.Voltar onClick={VoltarStep}>Home</Css.Voltar>
                <Css.Próximo onClick={ProxímaStep}>Próximo</Css.Próximo>
            </Css.Container>
        </Theme>
    );
};

export default CadastroStep2;