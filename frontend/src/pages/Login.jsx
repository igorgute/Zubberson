import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    try {
      await login(telefone, senha);
      navigate("/");
    } catch (error) {
      setErro("Telefone ou senha inválidos.");
    }
  }

  return (
    <div className="page-center">
      <Card className="form-card">
        <h1 className="page-title">Entrar</h1>
        <p className="page-subtitle">Acesse sua conta para continuar</p>

        {erro && <p className="error-text">{erro}</p>}

        <form onSubmit={handleSubmit}>
          <Input
            label="Telefone"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite seu telefone"
          />

          <Input
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />

          <Button type="submit">Entrar</Button>
        </form>

        <p className="link-text">
          Não tem conta? <Link to="/register">Criar conta</Link>
        </p>
      </Card>
    </div>
  );
}