import style from "styled-components";

export const Container = style.div`
    color: #213d36;
    font-weight: 600;
    p {
        font-size: 13px;
    }
    h1 {
        margin: 0px;
        padding: 0px;
        font-weight: 600;
        font-size: 26px;
    }
    hr {
        height: 2px;
        border: 0;
        background-color: #213d36;
        margin: 30px 0px;
    }
    label {
        font-size: 13px;
        
        input {
            display: block;
            margin-top: 20px;
            box-sizing: border-box;
            width: 100%;
            padding: 15px 10px;
            border: 2px solid #213d36;
            border-radius: 5px;
            outline: 0;
            background-color: #79B4A9;
            color: #213d36;
            font-size: 16px;
            font-weight: 500;
            transition: all 0.2s;
        } input:focus {
            transition: all 0.2s;
            border: 2px solid #D7F2BA;
        }
    }
`;

export const Próximo = style.button`
    color: #213d36;
    font-weight: 600;
    font-size: 14px;
    background-color: transparent;
    padding: 13px 40px; 
    border: 2px solid #213d36;
    border-radius: 30px;
    margin-top: 30px;
    transition: 0.3s;
        &:hover {
            cursor: pointer;
            color: #D7F2BA;
            border: 2px solid #D7F2BA;
            transition: 0.3s;
        }
`;

export const Voltar = style.button`
    background-color: transparent;
    color: #213d36;
    font-weight: 600;
    font-size: 14px;
    padding: 13px 40px; 
    border: 2px solid #213d36;
    border-radius: 30px;
    margin-top: 30px;
    margin-right: 40px;
    transition: 0.3s;
        &:hover {
            cursor: pointer;
            color: #D7F2BA;
            border: 2px solid #D7F2BA;
            transition: 0.3s;
        }
`;

export const View = style.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -53px;
    margin-bottom: 1px;
    padding: 16px 20px; 
`;

export const Senha = style.div`
    display: flex;
`;