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

export const SectionFormContato = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
`;