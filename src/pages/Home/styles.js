import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-columns: 200px auto;
grid-template-rows: 75px 75px auto;
grid-template-areas: 
"brand header"
"menu search"
"menu content";

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    >h1{
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`

export const Menu = styled.ul`
    grid-area: menu;
    padding-left: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    padding-top: 64px;
    text-align: left;

    >li{
        margin-bottom: 24px;
    }

`

export const Search = styled.div`
    grid-area: search;
    padding: 16px 64px 0;

`

export const Content = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;

`

