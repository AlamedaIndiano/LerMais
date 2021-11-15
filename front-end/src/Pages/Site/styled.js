import styled from "styled-components";

export const Container = styled.div`
    overflow-x: hidden;
`;

export const ContainerMenu = styled.div`
    position: fixed;
    width: 100vw;
    height: 10vh;
    z-index: 999;
`;

export const SectionSaibaMais = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const SaibaMais = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Frase = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 13px;
        font-weight: 500;
    }
`;

export const Info = styled.div`
    width: 75%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 13px;
        font-weight: 500;
    }
`;

export const SaibaMaisLocais = styled.div`
    width: 200px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.35rem;
        border-bottom: solid 2px black;
    }

    div {
        font-size: 1.8rem;
        text-shadow: 2px 3px 3px black;
        animation: icon 3s linear infinite;
        margin-top: -10px;
        & {
            @keyframes icon {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(30px);
                }
                100% {
                    transform: translateY(0px);
                }
            }
        }
    }
`;

export const SectionLocais = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #79B4A9;
`;

export const SectionDoação = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    h1 {
        margin-top: 5%;
    }
`;

export const ContainerFormasDeDoar = styled.div`
    background-color: #496b65;
    width: 60%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 1px 1px 4px black;
    h2 {
        height: 15%;
        color: #fff;
        text-shadow: 2px 2px 4px black;
    }
`;

export const FormasDeDoar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 5px black;
    border-radius: 5px;
`;

export const FormasDeDoarLEFT = styled.div`
    background-color: #7dc0b4;
    width: 60%;
    height: 100%;
    border-right: solid 2px #37504b;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 5px;
    li {
        color: #37504b;
        padding: 5px;
        font-weight: 600;
        font-size: 13px;
    }
`;

export const FormasDeDoarRIGHT = styled.div`
    background-color: #7dc0b4;
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 5px;
    div {
        text-align: center;
    }
    h3 {
        color: #37504b;
        font-weight: 600;
        font-size: 13px;
    }
    li {
        color: #37504b;
        padding: 2px;
        font-weight: 600;
        font-size: 13px;
    }
    button {
        background: #3f5c56;
        color: #fff;
        text-shadow: 1px 1px 5px black;
        cursor: pointer;
        border: none;
        padding: 5px 50px;
        border-radius: 3px;
        font-size: 12px;
        font-weight: 600;
    }
`;

export const InfoDoações = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        display: flex;
        p {
            padding: 4px;
            font-weight: 600;
        }
    }
`;

export const DestinoDasDoações = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin: 0px;
    }
`;