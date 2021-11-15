import React, { useEffect, useState } from "react";
import { api } from "../../../Config/api";
import * as Css from "./styled";
import { AdminTheme } from "../../../Components/Theme/Admin"
import { useForm } from "../../../Contexts/ContextCadastrar/FormContext";
import { useHistory } from "react-router-dom";

import { ModalDeleteLivros } from "../../../Components/Modal/Modal_Delete_Livros";


import { MdSearch } from "react-icons/md";

export const DeleteLivros = () => {

    const History = useHistory();

    const { state, dispatch } = useForm();

    const [ dados_image, setDados_image ] = useState([]);
    const [ dados_livro, setDados_livro ] = useState([]);
    const [ url, setUrl ] = useState('');

    const [ dados_delete, setDados_delete ] = useState([0, '' , false]);

    const [ background, setBackground ] = useState();

    useEffect(() => {
        if(dados_delete[2]){
            setBackground('rgba(000, 000, 000, 0.5)');
            dispatch({
                type: "setModal",
                payload: true
            });

            if(state.modelON === true){
                dispatch({
                    type: 'setModelON',
                    payload: false
                });

                const clicou = async () => {
                    await (
                        api.get(`/Deletar_Livro/${dados_delete[0]}`).then(() => console.log("OK")).catch(() => console.log("erro")),
                        api.get(`/Delete_Image/${dados_delete[1]}`),
                        setDados_delete([0, '' , false]),
                        dispatch({
                            type: 'setModal', 
                            payload: false
                        }),
                        dispatch({
                            type: 'setRefresh',
                            payload: true
                        }),
                        setTimeout(() => {
                            History.push('/NewLivros')
                        }, [500])
                    );
                };
                clicou();
            };
        };
    }, [dados_delete, dispatch, state.modelON, History]);

    const getImagens = async () => {
        await api.get("/Listar_Livros")
        .then((response) => {
            setDados_image(response.data.image);
            setUrl(response.data.url);
        }).catch((err) => {
            console.log(err.response)
        });
    };

    const getDataLivros = async () => {
        await api.get("/Listar_Livros")
        .then((response) => {
            setDados_livro(response.data.livro)
        }).catch((err) => {
            console.log(err.response.data)
        });
    };

    useEffect(() => {
        getImagens();   
        getDataLivros(); 
    }, []);

    useEffect(() => {
        dispatch({
            type: "setStep",
            payload: 2
        });
    }, [dispatch]);

    const [ dados_image_Search, setDados_image_Search ] = useState("");
    const [ url_Search, setUrl_Search ] = useState("");
    const [ dados_livro_Search, setDados_livro_Search ] = useState("");

    const [ dados_search, setDados_search ] = useState('');
    const [ search, setSearch ] = useState(false);

    const [ livro_não_encontrado, setLivro_não_encontrado ] = useState(false)

    if (dados_search === '' && search === true) {
        setSearch(false)
    };

    const Pesquisar = async (event) => {

        event.preventDefault();

        await api.get(`/Pesquisar_Livros/${dados_search}`)
            .then((response) => {
                setLivro_não_encontrado(false);
                setDados_image_Search(response.data.image);
                setUrl_Search(response.data.url);
                setDados_livro_Search(response.data.livro)
            }).catch((err) => {
                if(err.response.data.erro === true){
                    setLivro_não_encontrado(true);
                };
            });

        if(dados_search === ''){
            setSearch(false)
        } else {
            setSearch(true)
        }
    };

    return(
        <AdminTheme>
                <Css.ContainerBuscar>
                    <Css.CampoBuscar onSubmit={Pesquisar}>
                        <input type="text" value={dados_search} onChange={(event) => setDados_search(event.target.value)}/>
                        <button type="submit">Buscar <MdSearch /> </button>
                    </Css.CampoBuscar>
                </Css.ContainerBuscar>
            <Css.Container>
                {search === false? 
                    dados_image.map((dados_map_image) => (
                        <Css.Card key={dados_map_image.id}>
                            <Css.CampoImagens>
                                <Css.ContainerImagens>
                                    <Css.Imagens src={`${url}${dados_map_image.image}`} alt="" />
                                </Css.ContainerImagens> 
                            </Css.CampoImagens>
                            <Css.ContainerDadosLivros>
                                {dados_livro.map((dados_map_livro) => (
                                    <Css.DadosLivros key={dados_map_livro.id}>
                                        <Css.ContainerTitulo key={dados_map_livro.id}>
                                            <h1>{dados_map_image.id === dados_map_livro.id? dados_map_livro.titulo : ""}</h1>
                                            <Css.ContainerDescricao>
                                                <p>{dados_map_image.id === dados_map_livro.id? dados_map_livro.descricao : ""}</p>
                                            </Css.ContainerDescricao>
                                        </Css.ContainerTitulo>
                                    </Css.DadosLivros>
                                ))}
                            </Css.ContainerDadosLivros>
                            <Css.ContainerBtn>
                                <Css.Btn onClick={() => setDados_delete([dados_map_image.id, dados_map_image.image, true])}>Deletar livro</Css.Btn>
                            </Css.ContainerBtn>
                        </Css.Card>
                    ))
                    :
                    livro_não_encontrado === false? 
                        <Css.Card key={dados_image_Search.id}>
                            <Css.CampoImagens>
                                <Css.ContainerImagens>
                                    <Css.Imagens src={`${url_Search}${dados_image_Search.image}`} alt="" />
                                </Css.ContainerImagens> 
                            </Css.CampoImagens>
                            <Css.ContainerDadosLivros>
                                    <Css.DadosLivros key={dados_livro_Search.id}>
                                        <Css.ContainerTitulo key={dados_livro_Search.id}>
                                            <h1>{dados_image_Search.id === dados_livro_Search.id? dados_livro_Search.titulo : ""}</h1>
                                            <Css.ContainerDescricao>
                                                <p>{dados_image_Search.id === dados_livro_Search.id? dados_livro_Search.descricao : ""}</p>
                                            </Css.ContainerDescricao>
                                        </Css.ContainerTitulo>
                                    </Css.DadosLivros>
                            </Css.ContainerDadosLivros>
                            <Css.ContainerBtn>
                                <Css.Btn onClick={() => setDados_delete([dados_image_Search.id, dados_image_Search.image, true])}>Deletar livro</Css.Btn>
                            </Css.ContainerBtn>
                        </Css.Card>
                    : 
                    <h1>Livro não cadastrado!</h1>
                }
            </Css.Container>
            {state.modal?<Css.ContainerModal style={{background: `${background}`}}>
                 <ModalDeleteLivros /> 
            </Css.ContainerModal>
            : ""}
        </AdminTheme>
    );
};