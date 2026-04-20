import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    tipo: "passageiro",
  });

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setSucesso("");

    try {
      await api.post("/auth/register", form);
      setSucesso("Cadastro realizado com sucesso!");
      setTimeout(() => navigate("/login"), 1200);
    } catch (error) {
      setErro("Não foi possível realizar o cadastro.");
    }
  }

  return (
    <div className="page-center">
      <Card className="form-card">
        <h1 className="page-title">Criar conta</h1>
        <p className="page-subtitle">Cadastre-se para usar a plataforma</p>

        {erro && <p className="error-text">{erro}</p>}
        {sucesso && <p className="success-text">{sucesso}</p>}

        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            name="nome"
            type="text"
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome"
          />

          <Input
            label="Telefone"
            name="telefone"
            type="text"
            value={form.telefone}
            onChange={handleChange}
            placeholder="Seu telefone"
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Seu email"
          />

          <Input
            label="Senha"
            name="senha"
            type="password"
            value={form.senha}
            onChange={handleChange}
            placeholder="Sua senha"
          />

          <div className="form-group">
            <label>Tipo de conta</label>
            <select
              className="input"
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
            >
              <option value="passageiro">Passageiro</option>
              <option value="motorista">Motorista</option>
            </select>
          </div>

          <Button type="submit">Cadastrar</Button>
        </form>

        <p className="link-text">
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </Card>
    </div>
  );
}