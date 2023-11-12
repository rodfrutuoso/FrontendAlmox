import { Container } from "./styles";

export function Table({data}){
    return (
        <Container>
            <div className="cabecalho">
            {
                data[0].map(titulo => <h3>{titulo}</h3>)
            }
            </div>
            <div className="conteudo">
            {
                data.map((titulo, index) => {
                <li>{titulo}</li>
            })
            }                
            </div>
            
        </Container>

    )

}