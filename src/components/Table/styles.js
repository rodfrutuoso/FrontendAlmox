import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid ${({ theme }) => theme.COLORS.GREEN};
    padding: 15px;
    border-radius: 10px;
    

   .cabecalho{
        padding: 0 5px;
        margin-bottom: 10px;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: end;
        color: ${({ theme }) => theme.COLORS.ORANGE};
        border: 2px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

   }
   .conteudo{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-bottom: 10px;
        font-size: 13px;
        list-style: none;
        

        >li{
            padding: 0 5px;
            margin-bottom: 5px;
            display: flex;
           

            &:nth-child(odd) {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            }

            >input{
                font-size: 12px;
                height: 16px;
                margin: 0 2px;
                padding: 0 2px;
                
                color: ${({ theme }) => theme.COLORS.GREEN};
                background: transparent;
                border: 1px ;
                border-bottom-style: solid;
                border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
                
               
            }
            
        }
   }
   
`

//tentativa mal sucedida
/*
input[type="checkbox"] {
  
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}
*/
