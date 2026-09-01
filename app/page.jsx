import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
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
          textAlign: "center",
        }}>
          Bem-vindo ao Sistema Escolar SESI
        </h2>
        <p style={{
          textAlign: "center",
          fontSize: "1.1rem",
        }}>
          Gerencie notas, cadastre alunos e visualize listas de forma rápida e eficiente.
        </p>
      </main>
      <Footer />
    </>
  );
}