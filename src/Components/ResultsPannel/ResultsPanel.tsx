import { countPasswordsBase, probStartsWithAB, variant3Counts } from "../../Funcionalidades/passwordMath.service";

export function ResultsPanel() {
  const total = countPasswordsBase();
  const p2 = probStartsWithAB();
  const v3 = variant3Counts();

  return (
    <section style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12, marginTop: 16 }}>
      <h2>Respuestas (Regla del Producto)</h2>

      <p><b>1)</b> Total de combinaciones: <b>{total.toLocaleString("es-CO")}</b></p>

      <p>
        <b>2)</b> Probabilidad de que (empiece con “AB”): <b>{p2.fraction}</b> ≈ <b>{p2.percent.toFixed(6)}%</b>
      </p>

      <p>
        <b>3)</b> Con dígito extra entre símbolos (LLL DDD S D S): <b>{v3.total.toLocaleString("es-CO")}</b> <br />
        Nuevas: <b>{v3.extra.toLocaleString("es-CO")}</b> — Aumento: <b>{v3.increasePercent.toFixed(0)}%</b>
      </p>

      <p>
        <b>4)</b> La Regla del Producto es la adecuada en este caso porque la construcción de la contraseña ocurre mediante decisiones consecutivas que deben cumplirse todas, no mediante alternativas excluyentes.
      </p>
    </section>
  );
}