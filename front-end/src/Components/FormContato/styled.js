import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #CD8B76;
`;

export const ContainerMenu = styled.div`
    height: 13vh;
    background: #66999B;
    border-bottom: 1px solid #282828;
    box-shadow: 2px 2px 4px #282828;
`;

export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85%;
    width: inherit;
`;

export const Formulario = styled.form`   
    width: 45vw;
    height: fit-content;
    min-height: 75vh;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #c0d4d5;
    box-shadow: 1px 1px 10px #282828;
    h1 {
        font-size: 2rem;
        color: #fafff5;
        text-shadow: 1.5px 1.5px 4px black;
    }
    label {
        color: #fafff5;
        text-shadow: 1px 1px 3px black;
        display: flex;
        flex-direction: column;
        width: 70%;
        font-size: 1.18rem;
        font-weight: 500;
        p {
            z-index: 99;
            margin-left: 2%;
        }
    }
    input {
        color: #fafff5;
        text-shadow: 1px 1px 3px black;
        padding: 8px 0px;
        padding-left: 5px;
        width: 100%;
        outline: none;
        border: dashed 2.5px #fafff5;
        border-radius: 5px;
        background-color: #98b6b8;
        box-shadow: 1px 1px 5px #282828;
        margin-top: -41px;
        font-size: 1.18rem;
        font-weight: 500;
        transition: all 0.5s ease;
        &:focus {
            box-shadow: none;
            border: solid 2px #fafff5;
            margin-top: 0px;
            transition: all 0.5s ease;
        }
    }
    textarea {
        max-width: 100%;
        min-width: 100%;
        max-height: 18vh;
        min-height: 18vh;
        outline: none;
        border: solid 2px black;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: 500;
        color: #fafff5;
        text-shadow: 1px 1px 3px black;
        border: dashed 2.5px #fafff5;
        border-radius: 5px;
        background-color: #98b6b8;
        box-shadow: 1px 1px 5px #282828;
        margin-top: -41px;
        transition: all 0.5s ease;
        &:focus {
            box-shadow: none;
            border: solid 2px #fafff5;
            margin-top: 0px;
            transition: all 0.5s ease;
        }
    }
    button {
        padding: 10px 35%;
        outline: none;
        font-size: 1.1rem;
        font-weight: 600;
        border: solid 2px black;
        border-radius: 5px;
        cursor: pointer;
        color: #fafff5;
        text-shadow: 1px 1px 3px black;
        border: dashed 2.5px #fafff5;
        border-radius: 5px;
        background-color: #98b6b8;
        box-shadow: 1px 1px 5px #282828;
        margin-bottom: 5px;
        font-size: 1.18rem;
        font-weight: 500;
        transition: all 0.2s ease;
        &:focus {
            box-shadow: none;
            border: solid 2px #fafff5;
            margin-top: 0px;
            transition: all 0.2s ease;
        }
    }
`;