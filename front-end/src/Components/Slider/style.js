import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const Slider = styled.div`
    display: flex;
    width: calc(100vw * 4);
    height: 100vh;
    transition: all ease 1s;
`;

export const ItensSlider = styled.div`
    width: 100vw;
    height: inherit;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: grayscale(35%);

    h1 {
            font-size: 4rem;
            color: #fff;
            text-shadow: 2px 3px 6px black;
        }
    p {
        font-weight: 500;
        font-size: 1.5rem;
        color: #fff;
        text-shadow: 2px 3px 6px black;
    }
`;

export const ContainerBtnTransition = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
`;

export const BtnTransition = styled.div`
    font-size: 50px;
    color: #fff;
    margin: 15px;
    cursor: pointer;
`;

export const ConteinerSaibaMais = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

    p {
        font-size: 1.35rem;
        color: #fff;
        border-bottom: solid 2px #fff;
        text-shadow: 2px 2px 4px black;
    }

    div {
        color: #fff;
        font-size: 1.7rem;
        font-weight: 500;
        text-shadow: 2px 3px 6px black;
        animation: icon 3s linear infinite;
        margin-top: -12px;
        & {
            @keyframes icon {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(35px);
                }
                100% {
                    transform: translateY(0px);
                }
            }
        }
    }
`;