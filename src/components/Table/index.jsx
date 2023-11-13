import { Container } from "./styles";
import React from 'react'; // Adicione esta linha


export function Table({ datas, widths, inputs, ...rest }) {
    var widthTotal = 0
    return (
        <Container {...rest} style={{ width: `100%` }}>
            <div className="cabecalho">
                {
                    datas[0].map((titulo, index) => <h3 key={titulo} style={{ width: `${widths[index]}%` }} >{titulo}</h3>)
                }
            </div>
            <ul className="conteudo">
                {
                    datas.slice(1).map((dado, index) => {
                        return (
                            <li key={index}>
                                {dado.map((valor, i) => { return(
                                    <React.Fragment key={i}>{
                                        inputs.some(([inputIndex]) => inputIndex === i) ? (
                                            <input
                                                type={inputs.find(([inputIndex]) => inputIndex === i)[1]}
                                                style={{ width: `${widths[i]}%` }}
                                            />
                                        ) : (
                                            <div key={i} style={{ width: `${widths[i]}%` }}>
                                                {valor}
                                            </div>
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