import * as React from "react";
import { generateTempPassword } from "../../Funcionalidades/passwordGenerator.service";
import { validatePassword } from "../../Funcionalidades/passwordValidator.service";
import { EyeOpen } from "../Icons/EyeOpen";
import { EyeClosed } from "../Icons/EyeClosed";

//Se definen las propiedades que puede recibir un componente
type Props = {
  onPasswordChange?: (pwd: string) => void; //Para que sea reutilizable por si lo llaman en otro sitio
};

export function PasswordPanel({ onPasswordChange }: Props) {
  const [pwd, setPwd] = React.useState(""); //Con este guardamos la contraseña principal
  const [batch, setBatch] = React.useState<string[]>([]); //Para guardar las 10 contraseñas 
  const [showPassword, setShowPassword] = React.useState(false); //Por si la contraseña se ve o no 
  const [showBatch, setShowBatch] = React.useState<boolean[]>([]); //Por si las 10 contraseñas se van a ver o no 

  const v = React.useMemo(() => { //Cuando pwd cambie de estado se valide que la contraseña esté correcta
    return pwd ? validatePassword(pwd) : null;
  }, [pwd]);

  const generateOne = () => { //Genera una contraseña y la guarda como principal
    const p = generateTempPassword();
    setPwd(p);
    setShowPassword(false);
    onPasswordChange?.(p);
  };

  const generateTen = () => { //genera las 10 contraseñas
    const list = Array.from({ length: 10 }, () => generateTempPassword());
    setBatch(list);
    setShowBatch(Array.from({ length: list.length }, () => false));
  };

  //Limpia todo el panel
  const resetAll = () => { 
    setPwd("");
    setBatch([]);
    setShowPassword(false);
    setShowBatch([]);
  };

  //Cambia la contraseña principal entre visible y no visible
  const togglePassword = () => { 
    setShowPassword((prev) => !prev);
  };

  //Cambia el lote de contraseñas una por una entre visible y no visible
  const toggleBatchPassword = (index: number) => {
    setShowBatch((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  //Es un estilo reutilizable para los botones del ojo
  const eyeButtonStyle: React.CSSProperties = {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    color: "inherit",
  };

  return (
    <section
      style={{
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 12,
      }}
    >
      <h2 style={{ textAlign: "center" }}>Generar contraseña</h2>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={generateOne}>Generar 1</button>
        <button onClick={generateTen}>Generar 10</button>

        <button
          onClick={resetAll}
          style={{
            background: "#444444",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <strong style={{ fontSize: 22 }}>
            {pwd ? (showPassword ? pwd : "••••••••") : ""}
          </strong>

          {pwd && (
            <button
              onClick={togglePassword}
              style={eyeButtonStyle}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              type="button"
            >
              {showPassword ? <EyeOpen /> : <EyeClosed />}
            </button>
          )}
        </div>
      </div>

      {v && (
        <div style={{ marginTop: 12, textAlign: "center" }}>
          {v.ok ? (
            <span>Cumple todas las reglas</span>
          ) : (
            <>
              <div>No cumple:</div>
              <ul style={{ display: "inline-block", textAlign: "left" }}>
                {v.errors.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {batch.length > 0 && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <h3>Lote (10)</h3>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {batch.map((x, index) => (
              <li
                key={`${x}-${index}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <span style={{ minWidth: 90, textAlign: "center" }}>
                  {showBatch[index] ? x : "••••••••"}
                </span>

                <button
                  onClick={() => toggleBatchPassword(index)}
                  style={eyeButtonStyle}
                  aria-label={
                    showBatch[index]
                      ? `Ocultar contraseña ${index + 1}`
                      : `Mostrar contraseña ${index + 1}`
                  }
                  title={
                    showBatch[index]
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                  type="button"
                >
                  {showBatch[index] ? <EyeOpen /> : <EyeClosed />}
                </button>

                <span>{validatePassword(x).ok ? "✓" : ""}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}