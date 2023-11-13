import styled from "styled-components";

export const Container = styled.section`
    margin: 28px 0;

    >h2{
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({theme})=>theme.COLORS.GRAY_100};

        padding-bottom: 16px;
        margin-bottom: 12px;

        color: ${({theme})=>theme.COLORS.GRAY_300};
        font-size: 20px;
        font-weight: 400;
    }

   #boxChecker{
        color: ${({theme})=>theme.COLORS.GRAY_300};
        max-width: 96.6%;
        width: 100%;
        margin-bottom: 12px;
        gap: 10px;
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        >input{
            font-size: 250%;
        }
    }

`