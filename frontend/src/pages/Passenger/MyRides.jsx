import Navbar from "../../components/Navbar";

export default function MyRides() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="page-title">Minhas corridas</h1>
        <p className="page-subtitle">
          Aqui você verá suas corridas.
        </p>
      </div>
    </>
  );
}