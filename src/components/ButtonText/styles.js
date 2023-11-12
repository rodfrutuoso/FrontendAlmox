import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN : theme.COLORS.GRAY_300};

    border: none;
    font-size: 16px;
`