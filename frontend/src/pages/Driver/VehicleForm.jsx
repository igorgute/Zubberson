import Navbar from "../../components/Navbar";

export default function VehicleForm() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="page-title">Cadastrar veículo</h1>
        <p className="page-subtitle">
          Informe os dados do veículo.
        </p>
      </div>
    </>
  );
}