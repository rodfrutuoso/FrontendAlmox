import { LuFolder } from 'react-icons/lu'

import { Container, Brand, Menu, Search, Content, Calendar } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input';
import { Section } from '../../components/Section'
import { Table } from '../../components/Table';
import { Noteitem } from '../../components/Noteitem';
import { Button } from '../../components/Button';
import { Select } from '../../components/Select';

const data = [
  ["PROJETO", "CODIGO", "TEXTO", "QTD ORÇADA", "QTD ENVIADA", "QTD A ENVIAR", "OBS", "ENVIAR", "VISTO"],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "#ADC#", "", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "3", "2", "", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "#ADC#", "", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "3", "2", "", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "#ADC#", "", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "3", "2", "", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "#ADC#", "", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "3", "2", "", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "", "", ""]
]

const widths = [9.35,9.35,23.36,9.35,9.35,9.35,18.69,6.54,4.67];

// const inputs = [6,7]
const inputs = [[6, "text"], [7, "number"], [8, "checkbox"]]

const select = ["Saída", "Devolução"]
const dataOrcamento = new Date("11/02/2024")

function formatDate(date) {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return date.toLocaleDateString("pt-BR", options);
}

export function Home() {

  return (
    <Container>
      <Brand>
        <h1>ARES</h1>
      </Brand>
      <Header>

      </Header>
      <Menu>
        <li>
          <ButtonText title="Movimentação" to="/" isActive />
        </li>
        <li>
          <ButtonText title="Jogo entre projetos" to="/jogoprojetos" />
        </li>
        <li>
          <ButtonText title="Orçamentos" to="/orcamentos" />
        </li>
        <li>
          <ButtonText title="Histórico" to="/historico"/>
        </li>
      </Menu>

      <Search>
        <Select title="Tipo de Movimentação" lista={select} />
        <Input placeholder="Projeto" icon={LuFolder} />
        <Button title="Pesquisar" />
        <Calendar value={dataOrcamento}>
          <h3>Data do orçamento</h3>
          <div id='dataOrcamento'>{formatDate(dataOrcamento)}</div>
        </Calendar>
      </Search>
      <Content>
        <Section title="Movimentação">
          <div id='boxChecker' ><span>Selecionar tudo</span> <input type="checkbox" /></div>
          <div id='auxDivMov'>
            <Table datas={data} widths={widths} inputs={inputs} />
          </div>
        </Section>
        <Section id="Movimentacao" title="Materiais adicionais">
          <div id='auxDivMA'>
            <Noteitem codigo="220001" descricao="ALÇA NUM SEI DAS QUANTAS 0001/1" quantidade="25" />
            <Noteitem isNew />
          </div>
        </Section>
        <div style={{width: "100%", maxWidth: "30%", marginInline: "auto" }}>
          <Button title="Movimentar"/>
        </div>
      </Content>

    </Container>
  );
}
// <Check checked={check} onClick={() => setChecked(!check)} /> 
{/* <Checkbox/> */ }