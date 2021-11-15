import React, { useEffect } from "react";
import * as Css from "./style";

import { MdMenuBook, MdAddCircle, MdRemoveCircle} from "react-icons/md";
import { StepsItens } from "./StepItens";
import { useForm } from "../../../Contexts/ContextCadastrar/FormContext";
import { useHistory } from "react-router-dom";
import logo from "../../../imagens/logo.png";

export const SidebarItens = () => {

    const { state, dispatch } = useForm();
    const History = useHistory(); 

    return(
        <Css.Container>
            <Css.ContainerLogo 
                onClick={() => {
                    dispatch({
                        type: "setEmail",
                        payload: ""
                    });
                    
                    dispatch({
                        type: "setSenha",
                        payload: ""
                    });

                    dispatch({
                        type: "setAdmin",
                        payload: false
                    });

                    History.push('/');
                }}>

                <Css.Logo src={logo} alt="logo" />
            </Css.ContainerLogo>
            <Css.ContainerItens>
                <StepsItens 
                    h3="+ Livros" 
                    p="Adicionar livros" 
                    Icons={<MdMenuBook />}
                    MaisMenos={<MdAddCircle />}
                    Rota="/NewLivros"
                    Active={state.step === 1? "#ecffd8" : ""}
                    ColorActive={state.step === 1? "black" : ""}
                    ActivePointer={state.step === 1? "#ecffd8" : ""}
                />

                <StepsItens 
                    h3="- Livros" 
                    p="Remover livros" 
                    Icons={<MdMenuBook />}
                    MaisMenos={<MdRemoveCircle />}
                    Rota="/DeleteLivros"
                    Active={state.step === 2? "#ecffd8" : ""}
                    ColorActive={state.step === 2? "#black" : ""}
                    ActivePointer={state.step === 2? "#ecffd8" : ""}
                />
            </Css.ContainerItens>
        </Css.Container>
    );
};