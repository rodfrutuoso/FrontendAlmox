import styled, { isStyledComponent } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    height: 35px;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    >button{
        border: none;
        background: none;
    }

    .button-delete{
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add{
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    #codigo{
        width: 100px;
    }
    #descricao{
        width: 500px;
    }
    #quantidade{
        width: 100px;
    }

    >input{
        height: 56px;
        width: 100%;
        font-size: 12px;


        padding: 12px;
        color: ${({ theme, isNew }) => isNew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300}
        }

    }
`