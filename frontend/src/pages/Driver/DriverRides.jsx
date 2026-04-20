import Navbar from "../../components/Navbar";

export default function DriverRides() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="page-title">Corridas disponíveis</h1>
        <p className="page-subtitle">
          Veja e aceite corridas.
        </p>
      </div>
    </>
  );
}