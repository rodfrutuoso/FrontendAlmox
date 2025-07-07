import { Container, Form,  } from "./styles";
import { Input } from "../../components/Input"
import { FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>ARES</h1>
        <p>Controle de movimentação para almoxarifados</p>
        <h2>Faça seu Login</h2>
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
        <Button title="Entrar"/>

        <Link to="/register">
          Solicitar criação de conta
        </Link>
      </Form>

      
    </Container>
  );
}