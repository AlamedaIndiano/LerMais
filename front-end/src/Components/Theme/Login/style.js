import style from "styled-components";

import Logo from "../../../imagens/logo.png";

export const Container = style.div`
    background-color: #79B4A9;
    color: #fff; 
    height: 100vh;
`;

export const Area = style.div`
    display: flex;
    flex-direction: column;
    max-width: 980px;
    min-height: 100vh; 
    margin: auto;
`;

export const LogoImage = style.div`
    background-image: url(${Logo});
    background-size: cover;
    object-fit: cover;
    position: absolute;
    width: 120px;
    height: 120px;
    margin: -10px -140px;
    padding: 0;
`;

export const Steps = style.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = style.div`
    width: 250px;
    border-right: 2px solid #213d36;
`;

export const Page = style.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 30px; 
`;
