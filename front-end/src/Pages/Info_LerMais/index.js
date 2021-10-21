import React, { useEffect, useState } from "react";
import * as Css from "./Steyle";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Imagem1 from "../../imagens/ImagemHomePage.jpg";
import ibirapuera from "../../imagens/ibirapuera.jpg";
import jardin_botanico from "../../imagens/jardin_botanico.jpeg";

export const Info_LerMais = () => {

    useEffect(() => {
        setTotal_sliders(document.querySelectorAll('.Sliders').length);
        setCurrent_sliders(current_sliders +1);
    }, []);

    const [ total_sliders, setTotal_sliders ] = useState(0);
    const [ current_sliders, setCurrent_sliders ] = useState(0);
    const [ newMargin, setNewMargin ] = useState(0)

    const slider_transition = {
        marginLeft: `calc(100vw * -${newMargin})`
    };

    const Slider_Left = () => {
        setCurrent_sliders(current_sliders -1);

        if(current_sliders < 0){
            setCurrent_sliders(total_sliders - 1);
        }

        updateMargin();
    };

    const Slider_Right = () => {
        setCurrent_sliders(current_sliders +1);

        if(current_sliders > total_sliders - 2){
            setCurrent_sliders(0)
        };

        console.log(current_sliders)

        updateMargin();
    };

    const updateMargin = () => {
        setNewMargin(current_sliders);
    };

    return(
        <Css.Container>
            <Css.LogoImage/>
            <Css.Menu>
                <Css.Itens_Menu>
                    <Css.Container_Locais>Locais</Css.Container_Locais>
                    <Css.Container_Livros>Livros</Css.Container_Livros>
                    <Css.Container_Contato>Contato</Css.Container_Contato>
                </Css.Itens_Menu>
            </Css.Menu>
            <Css.Slider_Container>
                
                <Css.Container_Buttons_Slider>
                    <Css.Icons><MdChevronLeft onClick={Slider_Left} /></Css.Icons>
                    <Css.Icons><MdChevronRight onClick={Slider_Right}/></Css.Icons>
                </Css.Container_Buttons_Slider>

                <Css.Slider style={slider_transition}>

                    <Css.Slider_Item>
                        <Css.Conteudo_Sliders  className="Sliders" style={{
                            backgroundImage: `url(${ibirapuera})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}> 
                            <h1>Parque Ibirapuera - 27/11</h1>
                            <p>Marquise do Ibirapuera, Complexo Viário Ayrton Senna - Moema, São Paulo - SP, 04008-001</p>
                        </Css.Conteudo_Sliders>
                    </Css.Slider_Item>
                    
                    <Css.Slider_Item>
                        <Css.Conteudo_Sliders  className="Sliders" style={{
                            backgroundImage: `url(${jardin_botanico})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}> 
                            <h1>jardim botanico</h1>
                            <p>Av. Miguel Estéfno, 3031 - Vila Água Funda, São Paulo - SP, 04301-902</p>
                        </Css.Conteudo_Sliders>
                    </Css.Slider_Item> 

                    <Css.Slider_Item>
                        <Css.Conteudo_Sliders  className="Sliders" style={{
                            backgroundImage: `url(${Imagem1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}> 
                        sddssd
                        </Css.Conteudo_Sliders>
                    </Css.Slider_Item> 

                </Css.Slider>
            </Css.Slider_Container>
        </Css.Container>
    )
};