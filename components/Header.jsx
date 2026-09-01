import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      backgroundColor: "var(--background-red)",
      color: "var(--foreground-white)",
      padding: "1rem 2rem",
      boxShadow: "var(--shadow)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <h1>Sistema Escolar | SESI</h1>
      <nav>
        <ul style={{
          display: "flex",
          gap: "1.5rem",
          listStyle: "none",
          padding: "1rem 0",
        }}>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/cadAlunos">Cadastro de Alunos</Link></li>
          <li><Link href="/listaAlunos">Lista de Alunos</Link></li>
          <li><Link href="/cadNotas">Lançar Notas</Link></li>
        </ul>
      </nav>
    </header>
  );
}