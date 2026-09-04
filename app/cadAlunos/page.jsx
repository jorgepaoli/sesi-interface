'use client';

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CadAlunos() {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [turma, setTurma] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem("Aluno cadastrado com sucesso!");
    setNome("");
    setMatricula("");
    setTurma("");
  };

  return (
    <>
      <Header />
      <main style={{
        flex: 1,
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        width: "100%",
      }}>
        <h2 style={{
          color: "var(--background-red)",
          fontSize: "2rem",
          marginBottom: "1.5rem",
        }}>
          Cadastro de Alunos
        </h2>
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "#f9f9f9",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "var(--shadow)",
        }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="nome" style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Nome do Aluno(a):
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              style={{
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="matricula" style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Matrícula:
            </label>
            <input
              type="text"
              id="matricula"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              required
              style={{
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="turma" style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Turma:
            </label>
            <input
              type="text"
              id="turma"
              value={turma}
              onChange={(e) => setTurma(e.target.value)}
              required
              style={{
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            />
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
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#b71c1c"}
            onMouseOut={(e) => e.target.style.backgroundColor = "var(--background-red)"}
          >
            Cadastrar
          </button>
          {mensagem && <p style={{ color: "green", marginTop: "1rem" }}>{mensagem}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}