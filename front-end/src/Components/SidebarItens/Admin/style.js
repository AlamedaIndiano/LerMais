import style from "styled-components";

export const Container = style.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerLogo = style.div`
    background-color: rgba(103, 111, 84, 0.5);
    border: solid 2px rgba(000, 000, 000, 0.3);
    margin-top: -10vw;
    width: 85px;
    height: 85px; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
`;

export const Logo = style.img`
    width: 140%;
    height: 140%;
    margin-top: 8px;
`;

export const ContainerItens = style.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Steps = style.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const DescricaoSteps = style.div`
    width: 90px;
    color: #black;
    font-weight: 600;
    h3 {
        margin: 0;
        padding: 0;
        padding: 4px 0px;
        font-size: 17px;
        margin-left: -8px;
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 11px;
        margin-left: 2px;
    }
`;

export const ContainerIcons = style.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    border: solid center;
    justify-content: center;
`;

export const RemoveAndAdd = style.div`
    width: 100%;
    margin-top: -15px;
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
`;

export const Icons = style.div`
    background-color: #79B4A9;
    border: solid 2px black;
    color: black;
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-itens: center;
    padding: 7px;
    border-radius: 50%;
    font-size: 25px;
    cursor: pointer;
`;

export const ContainerMarcador = style.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: -0.4rem;
`;

export const MarcadorStepOn = style.div`
    background-color: #79B4A9;
    width: 8px;
    height: 8px;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    padding: 1px;
`;
