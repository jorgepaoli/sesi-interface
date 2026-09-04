import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      boxShadow: "var(--shadow)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      backgroundColor: "#fff",
      width: "100%",
    }}>
      {/* Top Red Bar */}
      <div style={{
        backgroundColor: "#d32f2f",
        height: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 2rem",
        color: "#fff",
        fontSize: "0.8rem",
        fontWeight: "bold"
      }}>
        <span style={{ marginRight: "10px" }}>FIESP</span>
        <span style={{ marginRight: "10px" }}>CIESP</span>
        <span style={{ marginRight: "10px" }}>SESI</span>
        <span>SENAI</span>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            backgroundColor: "#d32f2f",
            color: "#fff",
            padding: "5px 10px",
            fontSize: "2rem",
            fontWeight: "900",
            fontStyle: "italic",
            letterSpacing: "-1px"
          }}>
            SESI
          </div>
          <div style={{
            color: "#666",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            borderLeft: "1px solid #ccc",
            paddingLeft: "10px"
          }}>
            Serviço Social<br />da Indústria
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{
            display: "flex",
            border: "1px solid #ccc",
            borderRadius: "4px",
            overflow: "hidden"
          }}>
            <input 
              type="text" 
              placeholder="O que está buscando?" 
              style={{
                padding: "8px 12px",
                border: "none",
                outline: "none",
                width: "300px"
              }}
            />
            <button style={{
              backgroundColor: "#d32f2f",
              color: "#fff",
              border: "none",
              padding: "0 15px",
              cursor: "pointer",
              fontWeight: "bold"
            }}>Q</button>
          </div>
          <div style={{ display: "flex", gap: "15px", color: "#666", fontSize: "0.9rem", fontWeight: "bold" }}>
            <span style={{ cursor: "pointer" }}>PORTAL EDUCA</span>
            <span style={{ cursor: "pointer", color: "#d32f2f" }}>MEU SESI - ENTRAR</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0"
      }}>
        <ul style={{
          display: "flex",
          listStyle: "none",
          padding: "0 2rem",
          margin: "0 auto",
          maxWidth: "1200px",
          width: "100%",
          alignItems: "center"
        }}>
          {[
            { name: "INÍCIO", href: "/" },
            { name: "CADASTRO DE ALUNOS", href: "/cadAlunos" },
            { name: "LISTA DE ALUNOS", href: "/listaAlunos" },
            { name: "LANÇAR NOTAS", href: "/cadNotas" },
          ].map((item, index) => (
            <li key={item.name} style={{ display: "flex", alignItems: "center" }}>
              <Link 
                href={item.href}
                style={{
                  padding: "15px 15px",
                  color: "#555",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  textDecoration: "none"
                }}
              >
                {item.name}
              </Link>
              {index < 3 && (
                <div style={{ height: "15px", width: "2px", backgroundColor: "#d32f2f" }}></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}