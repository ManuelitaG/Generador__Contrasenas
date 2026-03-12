import "./App.css";
import { PasswordPanel } from "./Components/PasswordPanel/PasswordPanel";
import { ResultsPanel } from "./Components/ResultsPannel/ResultsPanel";


export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1>Generador de Credenciales</h1>
      <h2>Ejercicio: Regla del producto</h2>

      <PasswordPanel />
      <ResultsPanel />
    </div>
  );
}