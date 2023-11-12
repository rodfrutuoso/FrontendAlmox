import { Container } from "./styles";
import React from 'react'; // Adicione esta linha


export function Table({ datas, widths, inputs, ...rest }) {
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
                                {dado.map((valor, i) => { return(
                                    <React.Fragment key={i}>{
                                        inputs.includes(i) ? (
                                         <input
                                            type="number"
                                            style={{ width: widths[i] }}
                                        />
                                        ) : (
                                        <div key={i} style={{ width: widths[i] }}> {valor}</div>
                                        )}
                                    </React.Fragment>)
                                })}
                            </li>)

                    })
                }
            </ul>

        </Container>

    )

}