import React from "react";
import * as Css from "./styled";
import { useHistory } from "react-router-dom";

export const Menu = () => {

    const History = useHistory();

    return(
        <Css.Container>
            <Css.ContainerLogo href="#Home" onClick={() => History.push('/Site')}>
                <Css.Logo/>
            </Css.ContainerLogo>
            <Css.ItensMenu>
                <Css.Item><a href="#Locais">Locais & Data</a></Css.Item>
                <Css.Item onClick={() => History.push('/Livros_Disponiveis')}><p>Livros</p></Css.Item>
                <Css.Item onClick={() => History.push('/Form_Contato')}><p>Entre em contato</p></Css.Item>
            </Css.ItensMenu>
        </Css.Container>
    );
};