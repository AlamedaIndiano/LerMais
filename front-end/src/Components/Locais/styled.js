import styled from "styled-components";

export const Container = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
`;

export const Reload = styled.div`
    z-index: 90;
    width: 30vw;
    height: 80vh;
    background-color: #1c1c1c;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 1px 2px 5px black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageReaload = styled.img`
    width: 100px;
    height: 100px;
    filter: contrast(15%);
    animation: reload 2s linear infinite;
    position: absolute;
    animation: reload 1.8s linear infinite;
    & {
        @keyframes reload {
            0% {
                transform: rotateZ(0deg);
            }
            50% {
                transform: rotateZ(350deg);
               
            }
            100% {
                transform: rotateZ(550deg);
            }
        }
    }
`;

export const Imagem = styled.div`
    background-position: center;
    background-size: cover;
    width: 30vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 1px 2px 5px black;
    filter: saturate(100%);
    filter: grayscale(35%);
    z-index: 99;
    & {
        @keyframes image_animation {
            0% {
                opacity: 0%;
            }
            50% {
                opacity: 40%;
            }
            90% {
                opacity: 80%;
            }
            100% {
                opacity: 90%;
            }
        }
    }
`;

export const ContainerBotões = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Botões = styled.div`
    font-size: 30px;
    color: #fff;
    border: none;
    cursor: pointer;
`;

export const ContainerSteps = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    li {
        font-size: 23px;
    };
`;

export const ContainerInfo = styled.div`
    box-shadow: 2px 2px 5px black;
    background-color: #fff;
    width: 50vw;
    height: 80vh;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    & {
        @keyframes transition {
            0% {
                margin-left: 0px;
            }
            50% {
                margin-left: -30vw;
                width: 30vw;
            }
            100% {
                margin-left: 0px;
            }
        }
    }
`;

export const Info = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    p {
        font-weight: 500;
    }
    li {
        font-weight: 500;
    }
    & {
        @keyframes animation_text_info {
            0% {
                opacity: 100%;
            }
            20% {
                opacity: 20%;
            }
            40% {
                opacity: 0%;
            }
            60% {
                opacity: 10%;
            }
            80% {
                opacity: 40%;
            }
            100% {
                opacity: 100%;
            }
        }
    }
`;

export const Titulo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ContainerMapa = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Mapa = styled.iframe`
    border: none;
    border-radius: 5px;
    width: 60%;
    height: 100%;
`;