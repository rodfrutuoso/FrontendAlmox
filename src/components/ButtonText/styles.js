import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    background: none;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN : theme.COLORS.GRAY_300};

    border: none;
    font-size: 16px;
`