import React, { useEffect, useState } from "react";
import * as Css from "../style";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../../Contexts/ContextCadastrar/FormContext";

import { Theme } from "../../../../Components/Theme/Cadastro";

const CadastroStep1 = () => {
    const History = useHistory();
    const { state, dispatch } = useForm();

    const [digiteName, setDigiteName] = useState('Nome completo');
    const [ColorErro, setColorErro] = useState('25cd89');

    const ProxímaStep = () => {

        const NameValidar = /^[A-Za-z\s]+$/;

        if(state.name !== '' && NameValidar.test(state.name) === true){
            History.push("/CadastroStep2");
        } else {
            if(state.name === '') {
                setDigiteName('Digite o seu nome antes de passar para a próxima etapa!')
                setColorErro('#c40000');
            }
            if(NameValidar.test(state.name) !== true){
                setDigiteName('Certifique-se que seu nome não contém números ou caracteres especiais')
                setColorErro('#c40000');
            }
        };
    };

    const VoltarStep = () => {
        dispatch({
            type: "setEmail",
            payload: ""
        });

        History.push("/");
    };

    const DigitouName = (e) => {
        dispatch({
            type: "setName",
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
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo a baixo com o seu nome completo.</p>

                <hr />

                <label>
                    <p style={TextErro}>{digiteName}</p>
                    <input 
                        type="text" 
                        autoFocus
                        value={state.name}
                        placeholder="Digite seu nome aqui"
                        onChange={DigitouName}
                        style={BorderBotomErro}
                    />
                </label>
                
                <Css.Voltar onClick={VoltarStep}>Home</Css.Voltar>
                <Css.Próximo onClick={ProxímaStep}>Próximo</Css.Próximo>
            </Css.Container>
        </Theme>
    );
};

export default CadastroStep1;