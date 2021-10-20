import style from "styled-components";

export const Container = style.div`
    width: 100%;
    height: 50%;
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
    color: #213d36;
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
    justify-content: center;
`;

export const Icons = style.div`
    background-color: #213d36;
    border: solid 2px #213d36;
    color: #fff;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-itens: center;
    padding: 7px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
`;

export const ContainerMarcador = style.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: -17px;
`;

export const MarcadorStepOn = style.div`
    background-color: #79B4A9;
    width: 8px;
    height: 8px;
    border: 2px solid #213d36;
    border-radius: 50%;
    position: absolute;
    padding: 1px;
`;
