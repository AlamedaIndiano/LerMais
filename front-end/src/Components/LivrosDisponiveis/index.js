import React, { useState, useEffect } from "react";
import * as Css from "./styled";
import { api } from "../../Config/api";

import { useHistory } from "react-router-dom";

import { MdSearch } from "react-icons/md";

export const Livros_Disponiveis = () => {
    const History = useHistory();

    const [ dados_image, setDados_image ] = useState([]);
    const [ dados_livro, setDados_livro ] = useState([]);
    const [ url, setUrl ] = useState('');

    useEffect(() => {
        getImagens();   
        getDataLivros(); 
    }, []);

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

    const [ dados_image_Search, setDados_image_Search ] = useState("");
    const [ url_Search, setUrl_Search ] = useState("");
    const [ dados_livro_Search, setDados_livro_Search ] = useState("");

    const [ dados_search, setDados_search ] = useState('');
    const [ search, setSearch ] = useState(false);

    const [ livro_não_encontrado, setLivro_não_encontrado ] = useState(false);

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
        <Css.Container>
            <Css.SpaceBuscar>
                <Css.ContainerBuscar>
                    <Css.ContainerLogo href="#Home" onClick={() => History.push('/Site')}>
                        <Css.Logo/>
                    </Css.ContainerLogo>
                    <Css.CampoBuscar onSubmit={Pesquisar}>
                        <input type="text" value={dados_search} onChange={(event) => setDados_search(event.target.value)}/>
                        <button type="submit">Buscar <MdSearch /> </button>
                    </Css.CampoBuscar>
                </Css.ContainerBuscar>
            </Css.SpaceBuscar>
            <Css.ContainerCards>
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
                        </Css.Card>
                    : 
                    <h1>Livro não cadastrado!</h1>
                }
            </Css.ContainerCards>
        </Css.Container>
    );
};