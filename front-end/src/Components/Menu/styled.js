import styled from "styled-components";
import LogoImage from "../../imagens/logo.png"

export const Container = styled.div`
    background-color: #00000050;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ContainerLogo = styled.a`
    width: 5%;
    height: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.div`
    background-image: url(${LogoImage});
    background-size: cover;
    object-fit: cover;
    position: absolute;
    width: 120px;
    height: 120px;
    cursor: pointer;
`;

export const ItensMenu = styled.ul`
    width: 65%;
    display: flex;
    justify-content: space-around;
`;

export const Item = styled.li`
    list-style: none;
    cursor: pointer;
    border-bottom: solid 2px transparent;
    transition: all 0.2s;
    a {
        text-decoration: none;
        color: #fff;
        padding: 0px;
        margin: 0px;
        font-size: 15px;
        font-weight: 500;
            &:hover {
            border-bottom: solid 2px #fff;
            transition: all 0.2s;
        }
    }
    p {
        text-decoration: none;
        color: #fff;
        padding: 0px;
        margin: 0px;
        font-size: 15px;
        font-weight: 500;
            &:hover {
            border-bottom: solid 2px #fff;
            transition: all 0.2s;
        }
    }
`;