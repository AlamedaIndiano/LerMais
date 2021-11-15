import React, { useState, useEffect, useCallback } from "react";
import * as Css from "./style";
import { api } from "../../Config/api";

import { MdChevronLeft, MdChevronRight, MdSouth} from "react-icons/md";

let current_sliders = 0;

export const Slider = () => {

    const  total_sliders  = 4;

    const [ newMargin, setNewMargin ] = useState(0);

    const [ dados_sliders, setDados_sliders ] = useState([]);
    const [ url, setUrl ] = useState("");

    const Transition_Right = useCallback(() => {
        current_sliders ++;

        if(current_sliders > total_sliders -1 ){
            current_sliders = 0;
        };
        
        updateMargin();
    }, []);

    useEffect(() => {
        setInterval(()=>{
            Transition_Right();
        }, [8000])       
    }, [Transition_Right]);


    const Slider_Transition = {
        marginLeft: `calc(100vw * -${newMargin})`
    };

    const Transition_Left = () => {
        current_sliders --;

        if(current_sliders < 0){
            current_sliders = total_sliders - 1;
        }

        updateMargin();
    };


    const updateMargin = () => {
        setNewMargin(current_sliders);
    };

    const Buscar_Dados_Sliders = async () => {
        await api.get('/Dados_Sliders')
        .then((reponse) => {
            setDados_sliders(reponse.data.slider);
            setUrl(reponse.data.url);
        }).catch((err) => {
            if(err.reponse){
                console.log(err.response)
            }else{
                console.log("Não foi possível se comunicar com os servidores! Por favor, tente novamente mais tarde.");
            };
        });
    };

    useEffect(() => {
        Buscar_Dados_Sliders();
    }, []);

    return(
        <Css.Container>
            <Css.ContainerBtnTransition>
                <Css.BtnTransition onClick={Transition_Left}><MdChevronLeft/></Css.BtnTransition>
                <Css.BtnTransition onClick={Transition_Right}><MdChevronRight/></Css.BtnTransition>
            </Css.ContainerBtnTransition>

            <Css.Slider style={Slider_Transition}>
                {dados_sliders.map((dados) => (
                    <Css.ItensSlider key={dados.id} style={{backgroundImage: `url(${url}${dados.image})`}} >
                        <h1>{dados.titulo}</h1>
                        <p>{dados.local}</p>
                        <Css.ConteinerSaibaMais>
                            <p>Saiba Mais</p>
                            <div><MdSouth/></div>
                        </Css.ConteinerSaibaMais>
                    </Css.ItensSlider>
                ))}
            </Css.Slider>
        </Css.Container>
    );
};