import React, { useState, useEffect, useCallback } from "react";
import * as Css from "./style";

import { MdChevronLeft, MdChevronRight, MdSouth} from "react-icons/md";

let current_sliders = 0;

export const Slider = () => {

    const  total_sliders  = 4;

    const [ newMargin, setNewMargin ] = useState(0);

    const Transition_Right = useCallback(() => {
        current_sliders ++;

        if(current_sliders > total_sliders -1 ){
            current_sliders = 0;
        };
        
        updateMargin();
    }, []);

    /*useEffect(() => {
        setInterval(()=>{
            Transition_Right();
        }, [8000])       
    }, [Transition_Right]);*/


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

    return(
        <Css.Container>
            <Css.ContainerBtnTransition>
                <Css.BtnTransition onClick={Transition_Left}><MdChevronLeft/></Css.BtnTransition>
                <Css.BtnTransition onClick={Transition_Right}><MdChevronRight/></Css.BtnTransition>
            </Css.ContainerBtnTransition>

            <Css.Slider style={Slider_Transition}>
                <Css.ItensSlider style={{backgroundImage: `url()`}} >
                    <h1>Museu de Arte de São Paulo (Masp)</h1>
                    <p>Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200</p>
                    <Css.ConteinerSaibaMais>
                        <p>Saiba Mais</p>
                        <div><MdSouth/></div>
                    </Css.ConteinerSaibaMais>
                </Css.ItensSlider>
            </Css.Slider>
        </Css.Container>
    );
};