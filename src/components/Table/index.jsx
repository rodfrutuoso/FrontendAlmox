import { Container } from "./styles";

export function Table({ datas, widths, ...rest }) {
    return (
        <Container {...rest}>
            <div className="cabecalho">
                {
                    datas[0].map((titulo, index) => <h3  key={titulo} style={{ width: widths[index] }} >{titulo}</h3>)
                }
            </div>
            <ul className="conteudo">
                {
                    datas.map((dado, index) => {
                        if (index > 0) {
                            return(
                            <li key={index}>
                                {dado.map((valor,i) => <div key={i} style={{ width: widths[index] }}> {valor}</div>)}
                            </li>)
                        }
                    })
                }
            </ul>

        </Container>

    )

}