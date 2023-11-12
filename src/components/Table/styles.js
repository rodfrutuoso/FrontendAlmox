import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid ${({ theme }) => theme.COLORS.GREEN};
    padding: 15px;
    border-radius: 10px;

   .cabecalho{
        margin-bottom: 10px;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        color: ${({ theme }) => theme.COLORS.ORANGE};
        border: 2px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

   }
   .conteudo{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-bottom: 10px;
        font-size: 12px;
        list-style: none;
        

        >li{
            margin-bottom: 5px;
            display: flex;
           

            &:nth-child(odd) {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            }
        }
   }
   
`