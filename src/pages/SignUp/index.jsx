import { Container, Form } from "./styles";
import { Input } from "../../components/Input"
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Almox02</h1>
        <p>Controle de movimentação para almoxarifados</p>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Solicitar cadastro"/>

        <Link to="/">
          Voltar para o login
        </Link>
      </Form>

     
    </Container>
  );
}