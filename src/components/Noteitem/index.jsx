import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function Noteitem({isNew, codigo, descricao, quantidade, onClick, ...rest}){
    return (
        <Container isNew = {isNew}>
            <input id="codigo" type="number" value={codigo} readOnly={!isNew} placeholder="Código" {...rest} />
            <input id="descricao" type="text" value={descricao} readOnly={!isNew} placeholder="Descrição" {...rest} />
            <input id="quantidade" type="number" value={quantidade} readOnly={!isNew} placeholder="Quantidade" {...rest} />
            <button onClick={onClick} type="button" className={isNew ? 'button-add' : 'button-delete' }>
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>

    )

}