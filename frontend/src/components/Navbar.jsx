import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>Zuberson</h2>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {user && <span className="badge">{user.tipo}</span>}
        <button className="button" style={{ width: "auto" }} onClick={logout}>
          Sair
        </button>
      </div>
    </nav>
  );
}