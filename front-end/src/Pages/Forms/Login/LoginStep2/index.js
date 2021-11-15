import React, { useEffect, useState } from "react";
import * as Css from "../style";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../../Contexts/ContextCadastrar/FormContext";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

import { Theme } from "../../../../Components/Theme/Login";
import { api } from "../../../../Config/api";

const LoginStep2 = () => {

    const History = useHistory();

    const { state, dispatch } = useForm();
    
    const [versenha, setVersenha] = useState(true);
    const [senha, setSenha] = useState('password');
    
    const [digiteSenha, setDigiteSenha] = useState('Senha');
    const [ColorErro, setColorErro] = useState('25cd89');

    const ProxímaStep = async () => {
        
        if(state.senha !== ''){

            const Headers = {
                'Content-Type': 'application/json'
            }

            await api.post('/Validar_Password', {state}, {Headers})
            .then((response) => {
                if(response.data.erro !== true) {
                    History.push('/Site')
                } else {
                    setDigiteSenha(response.data.MensagemLogin)
                    setColorErro('#c40000');
                };
            }).catch(() => {
                const APIoff = ({
                    erro: 'erro',
                    mensagem: 'Não foi possível comunicar-se com os servidores... Tente mais tarde!'
                });

                setDigiteSenha(`${APIoff.mensagem}`);
                setColorErro('#c40000');
            });
        };
    };

    const VoltarStep = () => {
        History.push("/LoginStep1");
    };

    const DigitouSenha = (e) => {
        dispatch({
            type: "setSenha",
            payload: e.target.value
        });
    };

    const VerSenha = (e) => {
        e.preventDefault();
        setVersenha(false);
        setSenha('text');
    };
    const OcultarSenha = (e) => {
        e.preventDefault();
        setVersenha(true);
        setSenha('password');
    };

    useEffect(() => {
        dispatch({
            type: "setStep",
            payload: 2
        });

        if(state.email === ''){
            History.push('/LoginStep1')
        };
    }, [History, dispatch, state.email]);

    const TextErro = {
        color: `${ColorErro}`
    };
    const BorderBotomErro = {
        border: `2px solid ${ColorErro}`
    };

    const Visibility = {
        cursor: "pointer",
        fontSize: "20px"
    };

    return(
        <Theme>
            <Css.Container>
                <p>Passo 2/2</p>
                <h1>Digite sua senha</h1>
                <p>Preencha o campo a baixo com sua senha.</p>

                <hr />

                <label>
                    <p style={TextErro}>{digiteSenha}</p>
                    <input 
                        type={senha}
                        autoFocus
                        value={state.senha}
                        placeholder="Digite sua senha"
                        onChange={DigitouSenha}
                        style={BorderBotomErro}
                    />
                    <Css.View>
                        {versenha? 
                            <MdVisibility style={Visibility} onClick={VerSenha}/>
                            :
                            <MdVisibilityOff style={Visibility} onClick={OcultarSenha}/>
                        }
                    </Css.View>
                </label>

                <Css.Voltar onClick={VoltarStep}>Voltar</Css.Voltar>
                <Css.Próximo onClick={ProxímaStep}>Realizar Login</Css.Próximo>
            </Css.Container>
        </Theme>
    );
};

export default LoginStep2;