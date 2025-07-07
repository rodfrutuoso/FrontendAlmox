import { LuFolder } from 'react-icons/lu'
import { Bs123} from 'react-icons/bs'


import { Container, Brand, Menu, Search, Content } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input';
import { Section } from '../../components/Section'
import { Table } from '../../components/Table';
import { Button } from '../../components/Button';


const data = [
  ["DATA MOVIMENTAÇÃO", "PROJETO",  "CODIGO", "TEXTO", "QTD ENVIADA"],
  ["20/10/2023 15:35:12", "B-123456", "123456789", "POSTES 12/1000", "5"],
  ["20/10/2023 15:35:12", "B-123456", "123456789", "POSTES DT 11/400", "5"],
  ["20/10/2023 15:35:12", "B-123456", "123456789", "POSTES 12/1000", "5"],
  ["20/10/2023 15:35:12", "B-123456", "123456789", "POSTES DT 11/400", "5"],
  ["20/10/2023 15:35:12", "B-123456", "123456789", "POSTES 12/1000", "5"],
  ["20/10/2023 15:35:12", "B-123456", "123456789", "POSTES DT 11/400", "5"],
  ["20/10/2023 15:35:12", "B-123456", "123456789", "POSTES 12/1000", "5"],
  ["20/10/2023 15:35:12", "B-123456", "123456789", "POSTES DT 11/400", "5"],
  ["20/10/2023 15:35:12", "B-123456", "123456789", "POSTES 12/1000", "5"]
]

const widths = [30,15,15,25,15];

// const inputs = [6,7]
const inputs = []


export function Historico() {

  return (
    <Container>
      <Brand>
        <h1>ARES</h1>
      </Brand>
      <Header>

      </Header>
      <Menu>
        <li>
          <ButtonText title="Movimentação" to="/"  />
        </li>
        <li>
          <ButtonText title="Jogo entre projetos" to="/jogoprojetos"/>
        </li>
        <li>
          <ButtonText title="Orçamentos" to="/orcamentos" />
        </li>
        <li>
          <ButtonText title="Histórico" to="/historico" isActive/>
        </li>
      </Menu>

      <Search>
        <Input placeholder="Projeto" icon={LuFolder} />
        <Input placeholder="Código do material" icon={Bs123} />
        <Button title="Pesquisar" />
      </Search>
      <Content>
        <Section title="Histórico de movimentação">
          <div id='auxDivMov'>
            <Table datas={data} widths={widths} inputs={inputs} maxwidth={60} />
          </div>
        </Section>
      </Content>

    </Container>
  );
}
