import styled from "styled-components";
import LogoImage from "../../imagens/logo.png"

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    background-color: #CD8B76;
`;

export const SpaceBuscar = styled.div`
    width: 100vw;
    height: 13vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerBuscar = styled.div`
    position: fixed;
    z-index: 99;
    width: 98vw;
    height: 13vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #66999B;
    border-bottom: 1px solid #282828;
    box-shadow: 2px 2px 4px #282828;
`;


export const ContainerLogo = styled.a`
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #607B7D;
    border: solid 2px #37504b;
`;

export const Logo = styled.div`
    background-image: url(${LogoImage});
    background-size: cover;
    object-fit: cover;
    position: absolute;
    width: 100px;
    height: 100px;
    cursor: pointer;
    margin-top: 8px;
`;

export const CampoBuscar = styled.form`
    input {
        background-color: #fafff5;
        outline: none;
        padding: 6px 5px;
        width: 40vw;
        border: solid 2px #37504b;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        font-size: 13px;
        font-weight: 500;
    }
    button {
        background-color: #607B7D;
        color: #fafff5;
        text-shadow: 1px 1px 5px black;
        outline: none;
        padding: 5px 20px;
        cursor: pointer;
        border: solid 2px #324843;
        border-left: none;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        font-size: 14px;
        font-weight: 500;
    }
`;

export const ContainerCards = styled.div`
    width: 100vw;
    height: fit-content;
    min-height: 80vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 1px;
    }
`;

export const Card = styled.div`
    width: 210px;
    height: 360px;
    margin: 10px 10px;
    border-radius: 3px;
    box-shadow: 2px 2px 5px black;
    background-color: #fafff5;
`;

export const CampoImagens = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerImagens = styled.div`
    border-radius: 2px;
    width: 180px;
    height: 150px;
    margin-top: 15px;
    margin-bottom: 20px;
    background-color: rgba(000, 000, 000, 0.5);
`;

export const ContainerDadosLivros = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 160px;
    

    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: rgba(000, 000, 000, 0.2);
      border-radius: 20px;
    }
`;

export const DadosLivros = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContainerTitulo = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    text-align: center;
    
    h1 {
        font-size: 19px;
    }
`;

export const ContainerDescricao = styled.div`
    max-width: 180px;
    word-break: break-all;

    p {
        font-weight: 500;
        font-size: 11.85px;
    }
`;

export const ContainerBtn = styled.div`
    width: 100%;
    margin-top: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Btn = styled.button`
    cursor: pointer;
    color: black;
    font-weight: 600;
    font-size: 14px;
    background-color: transparent;
    padding: 7px 26px; 
    border: 2px solid black;
    border-radius: 30px;
    margin-top: 30px;
    transition: 0.3s;
        &:hover {
            color: #db4a39;
            border: 2px solid #db4a39;
            transition: 0.3s;
        }
`;

export const Imagens = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    opacity: 80%;
`;

export const ContainerModal = styled.div`
    width: 150vw;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;