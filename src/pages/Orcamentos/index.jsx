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
  ["PROJETO",  "CODIGO", "TEXTO", "QTD ORÇADA", "ENVIAR", "VISTO"],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "#ADC#", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "#ADC#", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "#ADC#", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "#ADC#", ""],
  ["B-123456", "123456789", "POSTES DT 11/400", "5", "", ""],
  ["B-123456", "123456789", "POSTES 12/1000", "5", "", ""]
]

const widths = [15,15, 40,15,7.5,7.5];

// const inputs = [6,7]
const inputs = [[4, "number"], [5, "checkbox"]]


export function Orcamentos() {

  return (
    <Container>
      <Brand>
        <h1>Almox02</h1>
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
          <ButtonText title="Orçamentos" to="/orcamentos" isActive/>
        </li>
        <li>
          <ButtonText title="Histórico" to="/historico"/>
        </li>
      </Menu>

      <Search>
        <Input placeholder="Projeto" icon={LuFolder} />
        <Input placeholder="Código do material" icon={Bs123} />
        <Button title="Pesquisar" />
      </Search>
      <Content>
        <Section title="Orçamento de projeto">
          <div id='boxCheckerO' ><span>Selecionar tudo</span> <input type="checkbox" /></div>
          <div id='auxDivMov'>
            <Table datas={data} widths={widths} inputs={inputs} maxwidth={60} />
          </div>
        </Section>
        
        <div style={{width: "100%", maxWidth: "30%", marginInline: "auto" }}>
          <Button title="Gerar PDF de separação"/>
        </div>
      </Content>

    </Container>
  );
}
