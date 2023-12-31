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

  #auxDivMov {
    display: flex;
    justify-content: center;
  }
  #auxDivMA {
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

  #Movimentacao {
    display: flex;
    align-items: flex-end;
  }
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding-top: 36px;
  text-align: left;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_100};

  > li {
    margin-bottom: 24px;
  }
`;

export const Search = styled.div`
  width: 100%;
  max-width: 70%;
  margin-inline: auto;
  grid-area: search;
  padding: 16px 64px 0;
  display: flex;
  gap: 15px;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  padding-bottom: 10px;
  overflow-y: auto;
`;
