import React from "react";
import * as Css from "./styled";
import { useHistory } from "react-router-dom";

export const Menu = () => {

    const History = useHistory();

    return(
        <Css.Container>
            <Css.ContainerLogo>
                <Css.Logo onClick={() => History.push('/Site')}/>
            </Css.ContainerLogo>
            <Css.ItensMenu>
                <Css.Item onClick={() => History.push('/Site')}><p>Locais</p></Css.Item>
                <Css.Item onClick={() => History.push('/Site')}><p>Livros</p></Css.Item>
                <Css.Item onClick={() => History.push('/Site')}><p>Doações</p></Css.Item>
            </Css.ItensMenu>
        </Css.Container>
    );
};