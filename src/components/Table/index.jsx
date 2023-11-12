import { Container } from "./styles";

export function Table({ datas, widths, ...rest }) {
    return (
        <Container {...rest}>
            <div className="cabecalho">
                {
                    datas[0].map((titulo, index) => <h3 key={titulo} style={{ width: widths[index] }} >{titulo}</h3>)
                }
            </div>
            <ul className="conteudo">
                {
                    datas.slice(1).map((dado, index) => {
                        return (
                            <li key={index}>
                                {dado.map((valor, i) => <div key={i} style={{ width: widths[i] }}> {valor}</div>)}
                            </li>)

                    })
                }
            </ul>

        </Container>

    )

}