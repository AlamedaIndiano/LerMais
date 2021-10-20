import React from "react";
import * as Css from "../style";
import { useHistory } from "react-router-dom";

export const StepsItens = ({h3, p, Icons, Rota, Active, ColorActive, ActivePointer}) => {

    const History = useHistory();
    
    const ColorStep = {
        backgroundColor: `${Active}`,
        color: `${ColorActive}`
    };
    const PointerColor = {
        backgroundColor: `${ActivePointer}`
    };

    return(
        <Css.Steps>
            <Css.DescricaoSteps>
                <h3>{h3}</h3>
                <p>{p}</p>
            </Css.DescricaoSteps>
            <Css.ContainerIcons>
                <Css.Icons onClick={() => History.push(Rota)} style={ColorStep}>    
                    {Icons}
                </Css.Icons>
            </Css.ContainerIcons>
            <Css.ContainerMarcador>
                <Css.MarcadorStepOn style={PointerColor}/>
            </Css.ContainerMarcador>
        </Css.Steps>
    );
};