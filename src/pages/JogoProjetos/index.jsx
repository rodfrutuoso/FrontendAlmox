import { LuFolderInput, LuFolderOutput } from 'react-icons/lu'


import { Container, Brand, Menu, Search, Content } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input';
import { Section } from '../../components/Section'
import { Table } from '../../components/Table';
import { Button } from '../../components/Button';


const data = [
  ["PROJETO ORIGEM", "PROJETO DESTINO" , "CODIGO", "TEXTO", "QTD ENVIADA", "OBS", "ENVIAR", "VISTO"],
  ["B-123456", "B-9876541", "123456789", "POSTES 12/1000", "5","", "#ADC#", "", ""],
  ["B-123456", "B-9876541", "123456789", "POSTES DT 11/400", "5","", "", "", ""],
  ["B-123456", "B-9876541", "123456789", "POSTES 12/1000", "5","", "#ADC#", "", ""],
  ["B-123456", "B-9876541", "123456789", "POSTES DT 11/400", "5","", "", "", ""],
  ["B-123456", "B-9876541", "123456789", "POSTES 12/1000", "5","", "#ADC#", "", ""],
  ["B-123456", "B-9876541", "123456789", "POSTES DT 11/400", "5","", "", "", ""],
  ["B-123456", "B-9876541", "123456789", "POSTES 12/1000", "5","", "#ADC#", "", ""],
  ["B-123456", "B-9876541", "123456789", "POSTES DT 11/400", "5","", "", "", ""],
  ["B-123456", "B-9876541", "123456789", "POSTES 12/1000", "5","", "", "", ""]
]

const widths = [9.35,9.35,9.35, 23.36,9.35,18.69,6.54,4.67];

// const inputs = [6,7]
const inputs = [[5, "text"], [6, "number"], [7, "checkbox"]]

const dataOrcamento = new Date("11/10/2023")
let check

function formatDate(date) {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return date.toLocaleDateString("pt-BR", options);
}

export function JogoProjetos() {

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
          <ButtonText title="Jogo entre projetos" to="/jogoprojetos" isActive />
        </li>
        <li>
          <ButtonText title="Orçamentos" />
        </li>
        <li>
          <ButtonText title="Histórico" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Projeto de origem" icon={LuFolderOutput} />
        <Input placeholder="Projeto de destino" icon={LuFolderInput} />
        <Button title="Pesquisar" />
      </Search>
      <Content>
        <Section title="Jogo de material entre projetos">
          <div id='boxCheckerJP' ><span>Selecionar tudo</span> <input type="checkbox" /></div>
          <div id='auxDivMov'>
            <Table datas={data} widths={widths} inputs={inputs} />
          </div>
        </Section>
        
        <div style={{width: "100%", maxWidth: "30%", marginInline: "auto" }}>
          <Button title="Movimentar"/>
        </div>
      </Content>

    </Container>
  );
}
