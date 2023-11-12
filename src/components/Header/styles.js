import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 75px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

    display: flex;
    justify-content: flex-end;
    gap: 15px;

    padding: 0 40px;
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    >img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    >div{
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span{
            font-size: 14px;
            color: ${({theme})=> theme.COLORS.WHITE};
        }
        strong{
            font-size: 18px;
            color: ${({theme})=> theme.COLORS.ORANGE};
        }

    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    >svg{
        color: ${({theme})=>theme.COLORS.GRAY_300};
        font-size: 36px;
    }

`