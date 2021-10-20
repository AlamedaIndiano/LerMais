import React from "react";
import * as Css from "./style";
import { useHistory } from "react-router-dom";

export const HomePage = () => {
    const History = useHistory();

    const ClicouCadastrar = () => {
        History.push("/CadastroStep1")
    };
    const ClicouLogin = () => {
        History.push("/LoginStep1")
    };

    return(
        <Css.Container>
            <Css.ImagemDeFundo>
                <Css.ContainerTextos>
                    <h1>Ler Mais</h1>
                    <p>Ler mais é um projeto sem fins lucrativos que visa arrecadar e doar livros em parques e praças da grande São Paulo. Cadastre-se e saiba mais!</p>
                </Css.ContainerTextos>
                <Css.ContainerButons>
                    <Css.Cadastrar onClick={ClicouCadastrar}>Cadastrar</Css.Cadastrar>
                    <Css.Login onClick={ClicouLogin}>Login</Css.Login>
                </Css.ContainerButons>
            </Css.ImagemDeFundo>
        </Css.Container>
    );
};