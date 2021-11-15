import React, { useEffect, useState } from "react";
import * as Css from "./styled";
import { api } from "../../Config/api";
import reload from "./unnamed.png";

import { MdChevronLeft, MdChevronRight} from "react-icons/md";

export const Locais = () => {

    const [ dados_local, setDados_local ] = useState([]);
    const [ url_mapa, setUrl_mapa ] = useState("");
    const [ url_image, setUrl_image ] = useState("");
    const [ image, setImage ] = useState([]);

    const [ animation, setAnimation ] = useState(false);
    
    console.log(url_image)

    useEffect(() => {
        DadosSite();
        Clicou_Right();
        setAnimation(false);
    }, []);

    useEffect(() => {
        DadosImage();
        Clicou_Right();
        setAnimation(false);
    }, []);

    const DadosSite = async () => {
        await api.get('/Dados_Locais_Evento')
        .then((response) => {
            setUrl_mapa(response.data.url_mapa);
            setDados_local(response.data.Novo_local[position]);
        }).catch((err) => {
            console.log("Erro! Não foi possivel localizar o local.")
        });
    };

    const DadosImage = async () => {
        await api.get('/Dados_Locais_Evento')
        .then((response) => {
            setUrl_image(response.data.url_image);
            setImage(response.data.Novo_local[position]);
        }).catch((err) => {
            console.log("Erro! Não foi possivel localizar o local.")
        });
    };

    const [ position, setPosition ] = useState(0);

    const Clicou_Right = async () => {
        if(position === 0){
            setPosition(position + 1);
        }else{
            if(position === 3){
                setPosition(0);
            }else{
                setPosition(position + 1);
            };
        };
        
        setTimeout(() => {
            DadosSite();
        }, [1250]);

        DadosImage();
        setAnimation(true);
    };

    const Clicou_Left = () => {
        if(position === 0){
            setPosition(3);
        }else{
            setPosition(position - 1);
        };
        
        setTimeout(() => {
            DadosSite();
        }, [1250]);
        
        DadosImage();
        setAnimation(true);
    };

    if(animation === true){
        setTimeout(() => {
            setAnimation(false);
        }, [2499]);
    };

    return(
        <Css.Container>
            <Css.Reload>
                <Css.ImageReaload src={reload} alt=""/>
                <Css.Imagem style={{
                    backgroundImage: `url(${url_image}${image.image})`,
                    animation:  `${animation === true? "image_animation 2s linear" : ""}`
                }}>
                    <Css.ContainerBotões>
                        <Css.Botões onClick={animation === false ? Clicou_Left : ""}><MdChevronLeft/></Css.Botões>
                        <Css.Botões onClick={animation === false ? Clicou_Right : ""}><MdChevronRight/></Css.Botões>  
                    </Css.ContainerBotões>
                    <Css.ContainerSteps>
                        <li style={{color: `${position === 0? "#fff" : ""}`}}/>
                        <li style={{color: `${position === 1? "#fff" : ""}`}}/>
                        <li style={{color: `${position === 2? "#fff" : ""}`}}/>
                        <li style={{color: `${position === 3? "#fff" : ""}`}}/>
                    </Css.ContainerSteps>
                </Css.Imagem>
            </Css.Reload>
            <Css.ContainerInfo style={{animation: `${animation === true? "transition 2.5s linear" : ""}`}}>
                <Css.Info style={{
                    transition:  `${animation === true? "left" : ""}`,
                    animation: `${animation === true? "animation_text_info 2.5s linear" : ""}`
                }}>
                    <Css.Titulo>
                        <h1>{dados_local.local}</h1>
                    </Css.Titulo>
                    <p>{dados_local.descricao}</p>
                    <h3>Data & Horário</h3>
                    <ul>
                        <li>{dados_local.data_sabado}</li>
                        <li>{dados_local.data_domingo}</li>
                    </ul>
                    <h3>Endereço</h3>
                    <Css.ContainerMapa>
                        <p>{dados_local.endereco}</p>
                        <Css.Mapa src={`${url_mapa}${dados_local.mapa}`}></Css.Mapa>
                    </Css.ContainerMapa>
                </Css.Info>
            </Css.ContainerInfo>
        </Css.Container>
    );
};