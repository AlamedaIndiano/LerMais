import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 1px;
    }
`;

export const ContainerBuscar = styled.div`
    position: fixed;
    margin-top: -90vh;
    height: 80px;
    width: 60vw;
    z-index: 999;
    display: flex;
    align-items: flex-end;
    background-color: #9CC69B;
    border-bottom: solid 2px rgba(000, 000, 000, 0.5);
    box-shadow: 2px 0px 5px black;
`;

export const CampoBuscar = styled.form`
    padding: 20px;
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    input {
        background-color: #d5d5d5;
        box-sizing: border-box;
        width: 40vw;
        padding: 5px 5px;
        background-color: rgba(777, 777, 777, 0.3);
        border-color: rgba(000, 000, 000, 0.8);
        border-right: 0px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        outline: 0;
        color: black;
        font-size: 16px;
        font-weight: 500;
        transition: all 0.2s;
            &:focus {
                transition: all 0.2s;
                background-color: rgba(777, 777, 777, 0.5);
            }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        font-weight: 500;
        font-size: 16px;
        background-color: #7c948275;
        padding: 4px 10px; 
        border: 2px solid  rgba(000, 000, 000, 0.8);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        transition: 0.3s;
        cursor: pointer;
            &:hover {
                background-color: rgba(777, 777, 777, 0.35);
                transition: 0.3s;
            }
    }
`;

export const Card = styled.div`
    width: 210px;
    height: 360px;
    margin: 10px 10px;
    border-radius: 3px;
    box-shadow: 2px 2px 5px black;
    background-color: #fff;
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
    height: 120px;
    

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
    
    h1 {
        font-size: 19px;
    }
`;

export const ContainerDescricao = styled.div`
    margin-top: -20px;
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