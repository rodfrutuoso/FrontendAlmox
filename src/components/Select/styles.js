import styled from "styled-components";


export const Container = styled.button`
  width: 800px;
  position: relative;
  border: none;
  background-color: transparent;
  margin-top: -10px;

  select {
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

    &:focus{
      outline: none;
    }
    
  }
`;

