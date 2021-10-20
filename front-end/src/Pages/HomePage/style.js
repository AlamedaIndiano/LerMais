import styled from "styled-components";
import Imagem from "../../imagens/ImagemHomePage.jpg";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
`;

export const ImagemDeFundo = styled.div`
    background-image: url(${Imagem});
    background-size: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const ContainerTextos = styled.div`
    padding-top: 80px;
    width: 35%;
    height: 50vh;    
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    justify-content: center;   
    color: #213d36;
        h1 {
            margin-bottom:  15px;
            font-size: 35px;
            font-weight: 600;
        }
        p {
            margin-left: 25px;
            font-size: 14px;
            font-weight: 600;
        }
`;

export const ContainerButons = styled.div`
    width: 45%;
    padding-left: 5%;
    height: 40vh;    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`;

export const Cadastrar = styled.button`
    padding: 10px 55px;
    font-weight: 600;
    font-size: 14px;
    color: #2e2e2e;
    cursor: pointer;
    border: 0;
    border: solid 2px #9cc69b;
    border-radius: 5px;
    background-color: #9CC69B;
    box-shadow: 2px 2px 5px #676f54;
        &:hover {
            background-color: #BDE4A8;
            border: solid 2px #BDE4A8;
            transition: 0.2s;
        }
        &:active {
            padding: 9px 53px;
            transition: 0.1s;
        }
`;

export const Login = styled.button`
    padding: 10px 60px;
    font-weight: 600;
    font-size: 14px;
    color: #2e2e2e;
    cursor: pointer;
    border: 0;
    border: solid 2px #9cc69b;
    border-radius: 5px;
    background-color: #9CC69B;
    box-shadow: 2px 2px 5px #676f54;
    transition: all 0.1s;
        &:hover {
            background-color: #BDE4A8;
            border: solid 2px #BDE4A8;
            transition: 0.2s;
        }
        &:active {
            padding: 9px 58px;
            transition: 0.1s;
        }
`;