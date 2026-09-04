"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CadNotas() {
  const [notas, setNotas] = useState([
    { id: 1, nome: "João Silva", nota1: "", nota2: "", nota3: "" },
    { id: 2, nome: "Maria Oliveira", nota1: "", nota2: "", nota3: "" },
    { id: 3, nome: "Pedro Santos", nota1: "", nota2: "", nota3: "" },
  ]);
  const [mensagem, setMensagem] = useState("");

  const handleChange = (id, disciplina, value) => {
    setNotas(notas.map(nota =>
      nota.id === id ? { ...nota, [disciplina]: value } : nota
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem("Notas lançadas com sucesso!");
  };

  return (
    <>
      <Header />
      <main style={{
        flex: 1,
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}>
        <h2 style={{
          color: "var(--background-red)",
          fontSize: "2rem",
          marginBottom: "1.5rem",
        }}>
          Lançar Notas
        </h2>
        <form onSubmit={handleSubmit} style={{
          backgroundColor: "#f9f9f9",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "var(--shadow)",
        }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "1rem",
            }}>
              <thead>
                <tr style={{ backgroundColor: "var(--background-red)", color: "white" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>Aluno(a)</th>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>Trabalho #1</th>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>Trabalho #2</th>
                  <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>Trabalho #3</th>
                </tr>
              </thead>
              <tbody>
                {notas.map((aluno) => (
                  <tr key={aluno.id} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "0.75rem" }}>{aluno.nome}</td>
                    <td style={{ padding: "0.75rem" }}>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={aluno.nota1}
                        onChange={(e) => handleChange(aluno.id, "nota1", e.target.value)}
                        style={{
                          padding: "0.5rem",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          width: "100px",
                        }}
                      />
                    </td>
                    <td style={{ padding: "0.75rem" }}>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={aluno.nota2}
                        onChange={(e) => handleChange(aluno.id, "nota2", e.target.value)}
                        style={{
                          padding: "0.5rem",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          width: "100px",
                        }}
                      />
                    </td>
                    <td style={{ padding: "0.75rem" }}>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={aluno.nota3}
                        onChange={(e) => handleChange(aluno.id, "nota3", e.target.value)}
                        style={{
                          padding: "0.5rem",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          width: "100px",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "var(--background-red)",
              color: "var(--foreground-white)",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
              marginTop: "1rem",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#b71c1c"}
            onMouseOut={(e) => e.target.style.backgroundColor = "var(--background-red)"}
          >
            Salvar Notas
          </button>
          {mensagem && <p style={{ color: "green", marginTop: "1rem" }}>{mensagem}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}