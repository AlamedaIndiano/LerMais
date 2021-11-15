import React, { useEffect, useState } from "react";
import { api } from "../../../Config/api";
import * as Css from "./styled";
import { AdminTheme } from "../../../Components/Theme/Admin"
import { useForm } from "../../../Contexts/ContextCadastrar/FormContext";
import { useHistory } from "react-router-dom";

import { MdAddPhotoAlternate } from "react-icons/md";

export const NewLivros = () => {

    const { state, dispatch } = useForm();
    const History = useHistory();

    const [ image, setImage ] = useState("");
    const [ titulo, setTitulo ] = useState("");
    const [ descricao, setDescricao ] = useState("");

    const [ textDescricao, setTextDescricao] = useState("");

    useEffect(() => {
        if(state.refresh === false){
            dispatch({
                type: "setStep",
                payload: 1
            });
        }
    }, [dispatch, state.refresh]);

    useEffect(() => {
        if(state.refresh){
            History.push('/DeleteLivros');
            setTimeout(() => {
                dispatch({
                    type: 'setRefresh',
                    payload: false
                });
            }, [320]);
        };
    }, );

    useEffect(() => {
        if(state.admin === false){
            History.push('/');
        };
    }, [state.admin, History]);

    const Upload_Imagens = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', image);

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        };

        const headers_Livros = {
            'Content-Type': 'application/json'
        };

        const Dados_Livros = {
            titulo,
            descricao
        };

        if(Dados_Livros.titulo !== '' && Dados_Livros.descricao !== '' && state.refresh === false){
            await api.post('/upload_imagem', formData, headers)
            .then((response) => {
                const Response = {
                    erro: response.data.erro,
                    mensagem: response.data.mensagem,
                };

                console.log(Response);
            }).catch((err) => {
                if(err.response){
                    const Erro = {
                        erro: err.response.data.erro,
                        mensagem: err.response.data.mensagem
                    };
        
                    console.log(Erro);
                } else {
                    const BackEndOFF = {
                        erro: true,
                        mensagem: "ERRO! Tente novamente mais tarde!"
                    };
                };
            });

            setDescricao('');
            setImage('');
            setTitulo('');
        } else {
            setTextDescricao("Não se esqueça de adicionar uma imagem para o livro!");
        };

        if(image.name !== undefined && state.refresh === false){
            await api.post("/New_Livros", {Dados_Livros}, {headers_Livros})
            .then((response) => {
                const ResponseLivros = {
                    erro: response.data.erro,
                    mensagem: response.data.mensagem
                };

                console.log(ResponseLivros);
            }).catch((err) => {
                if(err.response){
                    const ErrDadosLivros = {
                        erro: err.response.data.erro,
                        mensagem: err.response.data.mensagem
                    };

                    console.log(ErrDadosLivros);
                } else {
                    const ApiOFF = {
                        erro: true,
                        mensagem: "Erro: Tente mais tarde."
                    };

                    console.log(ApiOFF);
                };
            });

        } else {
            setTextDescricao("Não se esqueça de adicionar uma descrição e um titulo para o livro!");
        };
    };  

    return(
        <AdminTheme>
            <Css.Container>
                <Css.Formulario onSubmit={Upload_Imagens}>
                    <Css.Label>Imagem</Css.Label>
                    <Css.PrevioImage>
                        <Css.Image >
                            <MdAddPhotoAlternate />
                        </Css.Image>
                    </Css.PrevioImage>
                    <Css.CarregarArquivo type="file" name="imagem" onChange={(event) => setImage(event.target.files[0])}/>
                    
                    <div 
                        style={{
                            wordBreak: "break-all",
                            maxWidth: "340px"
                        }}>
                        <p 
                        style={{
                            color: "#db4a39",
                            fontSize: "14px",
                            fontWeight: "500"
                        }}>
                            {textDescricao}
                        </p>    
                    </div>
                    <Css.Label>Título</Css.Label>
                    <Css.Titulo type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} placeholder="Titulo do livro" />

                    <Css.Label>Descrição</Css.Label>
                    <Css.Descricao value={descricao} onChange={(event) => setDescricao(event.target.value)} placeholder="Descrição do livro" />

                    <Css.Btn type="submit">Salvar</Css.Btn>
                </Css.Formulario>
            </Css.Container>
        </AdminTheme>
    );
};