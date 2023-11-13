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

#auxDivMov{
    display: flex;
    justify-content: center;
}
#auxDivMA{
width: 100%;
display: flex;
flex-direction: column;

justify-content: center;
align-items: center;
}
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
    padding-top: 36px;
    text-align: left;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: ${({ theme }) => theme.COLORS.GRAY_100};

    >li{
        margin-bottom: 24px;
    }

`

export const Search = styled.div`
    grid-area: search;
    padding: 16px 64px 0;
    display: flex;
    gap: 15px;

`

export const Content = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;

`

export const Calendar = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;


    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    height: 52px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;
    
    >h3{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    >div{
        font-size: 20px;
        color: ${({ theme, value }) => new Date(value) > new Date() - (20 * 24 * 60 * 60 * 1000) ? theme.COLORS.GREEN : theme.COLORS.RED};
    }
`

// export const Check = styled.div`
//   width: 24px;
//   height: 24px;
//   background-color: ${({ theme, checked }) => (checked ? theme.COLORS.BACKGROUND_900 : theme.COLORS.BACKGROUND_800)};
//   border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
//   border-radius: 4px;
//   cursor: pointer;
// `

