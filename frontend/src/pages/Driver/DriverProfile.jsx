import Navbar from "../../components/Navbar";

export default function DriverProfile() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="page-title">Perfil de motorista</h1>
        <p className="page-subtitle">
          Cadastre ou visualize seu perfil.
        </p>
      </div>
    </>
  );
}