import styled from "styled-components";

import Logo from "../../imagens/logo.png";
import Imagem from "../../imagens/ImagemHomePage.jpg";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Menu = styled.div`
    position: fixed;
    height: 12vh;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(56, 56, 56, 0.5), rgba(56, 56, 56, 0.05));
    color: #;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoImage = styled.div`
    background-image: url(${Logo});
    background-size: cover;
    object-fit: cover;
    position: fixed;
    z-index: 99;
    width: 120px;
    height: 120px;
    margin: -18px 10px;
    padding: 0;
`;

export const Itens_Menu = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
`;

export const Container_Locais = styled.div`
    background-color: blue;
`;
export const Container_Livros = styled.div`
    background-color: blue;
`;
export const Container_Contato = styled.div`
    background-color: blue;
`;

export const Slider_Container = styled.div`
    flex: 1;
    overflow: hidden;
`;

export const Container_Buttons_Slider = styled.div`
    position: absolute;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Icons = styled.div`
    font-size: 50px;
    margin: 0px 20px;
    color: #D7F2BA;
    cursor: pointer;
    padding: 0px 0px;
`;

export const Slider = styled.div`
    width: calc(100vw * 4);
    height: 100vh;
    display: flex;
    transition: all 0.5s;
`;

export const Slider_Item = styled.div`
    object-fit: cover;
    width: 100vw;
    height: inherit;
`;

export const Conteudo_Sliders = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(56, 56, 56, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: grayscale(35%);
        h1 {
            font-size: 40px;
            color: #fff;
            text-shadow: 2px 2px 4px black;
        }
        p {
            font-weight: 600;
            color: #fff;
            text-shadow: 2px 2px 4px black;
        }
`;