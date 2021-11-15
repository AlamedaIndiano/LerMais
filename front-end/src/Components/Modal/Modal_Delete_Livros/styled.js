import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    width: 40vw;
    height: 40vh;
    border-radius: 3px;
    box-shadow: 1px 1px 15px black;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 17px;
        margin-bottom: 50px;
    }
`;

export const Header = styled.div`
    margin-top: -10%;
    margin-bottom: 5%;
    background-color: #db4a39;
    box-shadow: 0.5px 0.5px 3px black;
    width: 100%;
    height: 58px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TxtHeader = styled.div`
    padding: 20px;
`;

export const Icon = styled.div`
    padding: 20px;
    font-size: 15px;
`;

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
`;

export const Btn = styled.button`
    background-color: transparent;
    color: black;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 25px; 
    border: 2px solid black;
    border-radius: 30px;
    transition: 0.2s;
        &:hover {
            cursor: pointer;
            color: rgba(000, 000, 000, 0.6);
            border: 2px solid rgba(000, 000, 000, 0.35);
            transition: 0.2s;
        }
`;