import React from "react";
import * as Css from "./style";

import { MdEmail, MdLock } from "react-icons/md";
import { StepsItens } from "./StepsItens";
import { useForm } from "../../../Contexts/ContextCadastrar/FormContext";

export const SidebarItens = () => {

    const { state } = useForm();

    return(
        <Css.Container>
            <StepsItens 
                h3="Contato" 
                p="Seus Contatos" 
                Icons={<MdEmail />}
                Rota="/CadastroStep2"
                Active={state.step === 1? "#D7F2BA" : ""}
                ColorActive={state.step === 1? "#213d36" : ""}
                ActivePointer={state.step === 1? "#D7F2BA" : ""}
            />
            
            <StepsItens 
                h3="Segurança" 
                p="Sua Segurança" 
                Icons={<MdLock />} 
                Rota="/CadastroStep3"
                Active={state.step === 2? "#D7F2BA" : ""}
                ColorActive={state.step === 2? "#213d36" : ""}
                ActivePointer={state.step === 2? "#D7F2BA" : ""}
            />
        </Css.Container>
    );
};