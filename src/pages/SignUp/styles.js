import styled from "styled-components";
import backgroundImg from "../../../assets/background.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`

export const Form = styled.form`
    display: flex;
    width: 100%;
    max-width: 500px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;

    >h1{
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
    
    >h2{
        font-size: 24px;
        margin: 48px 0;
        color: ${({ theme }) => theme.COLORS.GREEN};        
    }

    >p{
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};;
    }

    >a{
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.GREEN}
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    
`
