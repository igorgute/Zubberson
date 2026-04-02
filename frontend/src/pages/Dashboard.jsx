import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="page-title">Olá, {user?.nome}</h1>
        <p className="page-subtitle">
          Bem-vindo ao painel da plataforma de transporte.
        </p>

        <div className="dashboard-grid">
          <Card>
            <h3>Tipo de usuário</h3>
            <p style={{ marginTop: "10px" }}>{user?.tipo}</p>
          </Card>

          <Card>
            <h3>Telefone</h3>
            <p style={{ marginTop: "10px" }}>{user?.telefone}</p>
          </Card>

          <Card>
            <h3>Email</h3>
            <p style={{ marginTop: "10px" }}>{user?.email || "Não informado"}</p>
          </Card>
        </div>
      </div>
    </>
  );
}