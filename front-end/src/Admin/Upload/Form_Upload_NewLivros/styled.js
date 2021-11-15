import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #79B4A9;
`;

export const Formulario = styled.form`
    padding: 30px 60px;
    background-color: #e1e1e1;
    box-shadow: 2px 2px 3px black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const PrevioImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin-bottom: 10px;
`;

export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px black;
    border-radius: 5px;
`;

export const CarregarArquivo = styled.input`
    margin-bottom: 15px;
    padding: 5px;
    font-family: "Montserrat Alternates";
    font-weight: 600;
    font-size: 10px;
`;

export const Titulo = styled.input`
    margin-top: 5px;
    margin-bottom: 20px;
    box-sizing: border-box;
    width: 100%;
    padding: 5px 5px;
    border: 2px solid #213d36;
    border-radius: 5px;
    outline: 0;
    color: #213d36;
    font-size: 16px;
    font-weight: 500;
    background-color: #e1e1e1;
    transition: all 0.2s;
        &:focus {
            transition: all 0.2s;
            border: 2px solid #9CC69B;
        }
`;

export const Descricao = styled.textarea`
    margin-top: 5px;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    max-width: 355px;
    min-width: 355px;
    max-height: 100px;
    min-height: 100px;
    padding: 5px 5px;
    border: 2px solid #213d36;
    border-radius: 5px;
    outline: 0;
    color: #213d36;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.2s;
    background-color: #e1e1e1;
        &:focus {
            transition: all 0.2s;
            border: 2px solid #9CC69B;
        }
`;

export const Btn = styled.button`
    color: #213d36;
    font-weight: 600;
    font-size: 14px;
    background-color: transparent;
    padding: 8px 28px; 
    border: 2px solid #213d36;
    border-radius: 30px;
    margin-top: 30px;
    transition: 0.3s;
        &:hover {
            cursor: pointer;
            color: #9CC69B;
            border: 2px solid #9CC69B;
            transition: 0.3s;
        }
`;