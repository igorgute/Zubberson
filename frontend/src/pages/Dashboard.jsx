import { Link } from "react-router-dom";
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
            <h3>Tipo</h3>
            <p>{user?.tipo}</p>
          </Card>

          <Card>
            <h3>Telefone</h3>
            <p>{user?.telefone}</p>
          </Card>

          <Card>
            <h3>Email</h3>
            <p>{user?.email || "Não informado"}</p>
          </Card>
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2 style={{ marginBottom: "16px" }}>Ações</h2>

          <div className="dashboard-grid">

            {user?.tipo === "passageiro" && (
              <>
                <Card>
                  <h3>Nova corrida</h3>
                  <Link to="/passenger/create-ride">
                    <button className="button">Solicitar</button>
                  </Link>
                </Card>

                <Card>
                  <h3>Minhas corridas</h3>
                  <Link to="/passenger/my-rides">
                    <button className="button">Ver</button>
                  </Link>
                </Card>
              </>
            )}

            {user?.tipo === "motorista" && (
              <>
                <Card>
                  <h3>Perfil</h3>
                  <Link to="/driver/profile">
                    <button className="button">Acessar</button>
                  </Link>
                </Card>

                <Card>
                  <h3>Veículo</h3>
                  <Link to="/driver/vehicle">
                    <button className="button">Cadastrar</button>
                  </Link>
                </Card>

                <Card>
                  <h3>Corridas</h3>
                  <Link to="/driver/rides">
                    <button className="button">Ver</button>
                  </Link>
                </Card>
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}