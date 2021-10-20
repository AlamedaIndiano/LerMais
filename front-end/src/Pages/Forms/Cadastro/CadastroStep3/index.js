import React, { useEffect, useState } from "react";
import * as Css from "../style";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../../Contexts/ContextCadastrar/FormContext";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

import { Theme } from "../../../../Components/Theme/Cadastro";
import { api } from "../../../../Config/api";

const CadastroStep3 = () => {
    const History = useHistory();
    const { state, dispatch } = useForm();

    
    const [versenha, setVersenha] = useState(true);
    const [senha, setSenha] = useState('password');
    
    const [digiteSenha, setDigiteSenha] = useState('Senha');
    const [ColorErro, setColorErro] = useState('25cd89');

    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [confimeSenha, setConfimeSenha] = useState('');
    const [colorConfirmarSenhaErro, setColorConfirmarSenhaErro] = useState('25cd89');

    const ProxímaStep = async () => {

        const SenhaValidar = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
        
        if(state.senha !== '' && SenhaValidar.test(state.senha) === true && state.senha === confirmaSenha){

            const Headers = {
                'Content-Type': 'application/json'
            }

            await api.post('/NewUser', {state}, {Headers})
            .then((response) => {
                History.push('/LoginStep1')
            }).catch(() => {
                const APIoff = ({
                    erro: 'erro',
                    mensagem: 'Não foi possível comunicar-se com os servidores... Tente mais tarde!'
                });

                setDigiteSenha(`${APIoff.mensagem}`);
                setColorErro('#c40000');
            });
            
        } else if (SenhaValidar.test(state.senha) === false) {
            setDigiteSenha('Digite uma senha mais forte! Sua senha deve conter no mínimo mínimo 8 carácteres, 1 letra maiúsculas, 1 letra minúscula e 1 número!');
            setColorErro('#c40000');
            setColorConfirmarSenhaErro('#c40000');

        } else if (state.senha !== confirmaSenha && SenhaValidar.test(state.senha) === true) {
            setConfimeSenha('Certifique-se que a senha digitada corresponde à senha anterior!');
            setColorConfirmarSenhaErro('#c40000');
        };
    };

    const VoltarStep = () => {
        History.push("/CadastroStep2");
    };

    const DigitouSenha = (e) => {
        dispatch({
            type: "setSenha",
            payload: e.target.value
        });
    };
    const DigitouSenhaConfirmar = (e) => {
        setConfirmaSenha(e.target.value);
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
            payload: 3
        });
        if (state.email === '' || state.name === ''){
            History.push("/CadastroStep2");
        };
    }, []);

    const TextErro = {
        color: `${ColorErro}`
    };
    const BorderBotomErro = {
        border: `2px solid ${ColorErro}`
    };

    const TextConfirmarSenhaErro = {
        color: `${colorConfirmarSenhaErro}`
    };
    const BorderBotomConfirmarSenhaErro = {
        border: `2px solid ${colorConfirmarSenhaErro}`
    }

    const Visibility = {
        cursor: "pointer",
        fontSize: "20px"
    };

    return(
        <Theme>
            <Css.Container>
                <p>Passo 3/3</p>
                <h1>{state.name}, crie uma senha para sua conta</h1>
                <p>Preencha o campo a baixo com sua nova senha.</p>

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

                <label>
                    <p style={TextConfirmarSenhaErro}>{confimeSenha}</p>
                    <input 
                        type={senha}
                        value={confirmaSenha}
                        placeholder="Confirme sua senha"
                        onChange={DigitouSenhaConfirmar}
                        style={BorderBotomConfirmarSenhaErro}
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
                <Css.Próximo onClick={ProxímaStep}>Finalizar Cadastro</Css.Próximo>
            </Css.Container>
        </Theme>
    );
};

export default CadastroStep3;