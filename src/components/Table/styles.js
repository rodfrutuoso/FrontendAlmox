import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid ${({theme})=>theme.COLORS.GREEN};
    padding: 15px;
    border-radius: 10px;

   .cabecalho{
        margin-bottom: 10px;
        font-size: 12px;
        display: flex;
        color: ${({theme})=>theme.COLORS.ORANGE};
        justify-content: space-between;
        border: 2px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};
   }
   
`