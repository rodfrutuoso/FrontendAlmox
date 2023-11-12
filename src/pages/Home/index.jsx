import {FiPlus, FiSearch} from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input';
import {Section} from '../../components/Section'
import {Note} from '../../components/Note'

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
          <Note data={{title: "React", 
          tags : [{id: "1", name: "React"},
          {id: "2", name: "Next"}
          ]}}/>
          
          
        </Section>
      </Content>

    </Container>
  );
}