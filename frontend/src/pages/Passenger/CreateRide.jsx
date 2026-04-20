import Navbar from "../../components/Navbar";

export default function CreateRide() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="page-title">Solicitar corrida</h1>
        <p className="page-subtitle">
          Informe origem e destino para criar uma nova corrida.
        </p>
      </div>
    </>
  );
}