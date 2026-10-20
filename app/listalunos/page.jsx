"use client"; // Indique que ce composant utilise des interactions côté client

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ListaAlunos() {
  // Exemple de données d'élèves (à remplacer par une vraie base de données)
  const [alunos, setAlunos] = useState([
    { id: 1, nome: "João Silva", matricula: "2023001", turma: "1A" },
    { id: 2, nome: "Maria Oliveira", matricula: "2023002", turma: "1B" },
    { id: 3, nome: "Pedro Santos", matricula: "2023003", turma: "2A" },
  ]);

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
          Lista de Alunos
        </h2>
        <div style={{
          backgroundColor: "#f9f9f9",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "var(--shadow)",
        }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "1rem",
          }}>
            <thead>
              <tr style={{ backgroundColor: "var(--background-red)", color: "white" }}>
                <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>Nome</th>
                <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>Matrícula</th>
                <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "1px solid #ddd" }}>Turma</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno) => (
                <tr key={aluno.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "0.75rem" }}>{aluno.nome}</td>
                  <td style={{ padding: "0.75rem" }}>{aluno.matricula}</td>
                  <td style={{ padding: "0.75rem" }}>{aluno.turma}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}