import {FiSearch} from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input';
import {Section} from '../../components/Section'
import { Table } from '../../components/Table';

const data =[
  ["PROJETO", "CODIGO", "TEXTO", "QTD ORÇADA", "QTD ENVIADA", "QTD A ENVIAR", "OBS", "ENVIAR"]
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "", "QTD A ENVIAR"]
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "", "QTD A ENVIAR"]
  ["B-123456", "123456789", "POSTES 12/1000", "5", "3", "2", "", "QTD A ENVIAR"]
]

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
          <ButtonText title="Lista de materiais" />
        </li>
      </Menu>

      <Search>
        <Input placeholder = "Pesquisar" icon={FiSearch}/>
      </Search>
      <Content>
        <Section title="Movimentação">
          <Table data={data}/>
          
          
        </Section>
      </Content>

    </Container>
  );
}