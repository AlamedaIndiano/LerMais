import React from "react";
import * as Css from "./styled";
import { MdClose } from "react-icons/md";
import { useForm } from "../../../Contexts/ContextCadastrar/FormContext";

export const ModalDeleteLivros = () => {

    const { dispatch } = useForm();

    const ModelOff = () => {
        dispatch({type: 'setModelON', payload: false});
        dispatch({type: 'setModal', payload: false})
    };

    const ModelOn = () => {
        dispatch({type: 'setModelON', payload: true});
    };

    return(
        <Css.Container>
            <Css.Header>
                <Css.TxtHeader>
                    <h3>DELETAR LIVRO!</h3>
                </Css.TxtHeader>
                <Css.Icon>
                    <MdClose onClick={ModelOff}/>
                </Css.Icon>
            </Css.Header>
            <h1>Tem certeza que deseja excluir o item selecionado?</h1>
            <Css.ContainerButtons>
                <Css.Btn style={{backgroundColor: "#db4a39"}} onClick={ModelOff}>Cancelar</Css.Btn>
                <Css.Btn style={{backgroundColor: "#79B4A9"}} onClick={ModelOn}>Confirmar</Css.Btn>
            </Css.ContainerButtons>
        </Css.Container>
    )
}