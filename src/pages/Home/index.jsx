import { FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input';
import { Section } from '../../components/Section'
import { Table } from '../../components/Table';
import { Noteitem } from '../../components/Noteitem';
import { Button } from '../../components/Button';
import { Select } from '../../components/Select';

const data = [
  ["PROJETO", "CODIGO", "TEXTO", "QTD ORÇADA", "QTD ENVIADA", "QTD A ENVIAR", "OBS", "ENVIAR"],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "#ADC#", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "3", "2", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "#ADC#", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "3", "2", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "#ADC#", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "3", "2", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "#ADC#", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "3", "2", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "", ""]
]

const widths = [100, 100, 350, 100, 100, 100, 200, 50];

// const inputs = [6,7]
const inputs = [[6, "text"], [7, "number"]]

const select = ["Saída", "Devolução"]

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Almox02</h1>
      </Brand>
      <Header>

      </Header>
      <Menu>
        <li>
          <ButtonText title="Movimentação" isActive />
        </li>
        <li>
          <ButtonText title="Jogo entre projetos" />
        </li>
        <li>
          <ButtonText title="Orçamentos" />
        </li>
        <li>
          <ButtonText title="Histórico" />
        </li>
      </Menu>

      <Search>
        <Select title="Tipo de Movimentação" lista={select} />
        <Input placeholder="Projeto" icon={FiSearch} />
        <Button title="Pesquisar"/>
      </Search>
      <Content>
        <Section title="Movimentação">
          <div id='auxDivMov'>
            <Table datas={data} widths={widths} inputs={inputs} />
          </div>
        </Section>
        <Section title="Materiais adicionais">
          <div id='auxDivMA'>
            <Noteitem codigo="220001" descricao="ALÇA NUM SEI DAS QUANTAS 0001/1" quantidade="25" />
            <Noteitem isNew />
          </div>
        </Section>
      </Content>

    </Container>
  );
}