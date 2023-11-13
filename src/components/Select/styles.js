import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  position: relative;
  border: none;
  background-color: transparent;

  

  select {
    appearance: none;
    font-size: 16px;
    -webkit-appearance: none;
    cursor: pointer;

    width: 100%;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background-color: ${({ theme, selectedValue }) =>
      selectedValue === "Saída"
        ? theme.COLORS.GREEN
        : selectedValue === "Devolução"
        ? theme.COLORS.RED
        : theme.COLORS.ORANGE};

    height: 52px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;

    &:hover {
      transition: filter 0.2s;
      filter: brightness(0.9);
    }

    &:focus {
      outline: none;
    }
  }
`;
