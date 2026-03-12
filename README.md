# Generador de Credenciales

Aplicación web desarrollada con **React + TypeScript + Vite** para generar contraseñas temporales cumpliendo reglas específicas definidas en un ejercicio basado en la **Regla del Producto**.


## Demo del proyecto

Aplicación desplegada en Vercel:

🔗 https://generador-contrasenas-xi.vercel.app
---

## Descripción

Este proyecto simula un sistema de **generación automática de credenciales** para nuevos usuarios de una aplicación empresarial.

La contraseña generada debe cumplir condiciones estrictas sobre:

- Longitud
- Tipo de caracteres
- Restricción de repetición dentro de cada sección

Además de generar las contraseñas, la aplicación permite:

- Validar automáticamente si cumplen las reglas
- Generar una sola contraseña o un lote de 10
- Mostrar u ocultar cada contraseña mediante iconos visuales
- Reiniciar la interfaz
- Presentar la solución matemática del ejercicio usando la **Regla del Producto**

---

## Reglas de la contraseña

Cada contraseña debe cumplir las siguientes condiciones:

- Tener exactamente **8 caracteres**
- Los primeros **3 caracteres** deben ser letras mayúsculas (**A-Z**)
- Los siguientes **3 caracteres** deben ser dígitos (**0-9**)
- Los últimos **2 caracteres** deben ser símbolos especiales del conjunto:

```
!, @, #, $, %
```

- No se permiten caracteres repetidos dentro de cada sección.

Ejemplo de formato válido:

```
ABC123@#
```

---

## Funcionalidades principales

- Generación de una contraseña individual
- Generación de un lote de **10 contraseñas**
- Validación automática de las contraseñas generadas
- Opción para mostrar u ocultar la contraseña principal
- Opción para mostrar u ocultar cada contraseña del lote
- Botón de reinicio para limpiar la pantalla
- Visualización de respuestas matemáticas del ejercicio

---

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS

---

## Estructura del proyecto

El proyecto está organizado siguiendo una separación inspirada en el modelo **MVC**.

```
src/

Components/
│
├── Icons/
│   ├── EyeOpen.tsx
│   └── EyeClosed.tsx
│
├── PasswordPanel/
│   └── PasswordPanel.tsx
│
└── ResultsPanel/
    └── ResultsPanel.tsx

Funcionalidades/
│
├── passwordGenerator.service.ts
├── passwordValidator.service.ts
└── passwordMath.service.ts

Models/
│
├── password.model.ts
└── password.rules.ts

App.tsx
App.css
index.css
main.tsx
```

---

## Explicación de la arquitectura

### Models

Contienen las estructuras, tipos y reglas del dominio del problema.

Ejemplos:

- reglas de longitud
- conjunto de símbolos permitidos
- tipos de resultados de validación

---

### Funcionalidades

Contienen la lógica del sistema.

Ejemplos:

- generación de contraseñas
- validación de formato
- cálculos matemáticos de combinaciones y probabilidades

---

### Components

Representan la interfaz visual.

Ejemplos:

- panel para generar contraseñas
- panel de resultados
- iconos para mostrar y ocultar información

---

## Explicación matemática

La aplicación también resuelve las preguntas del ejercicio usando la **Regla del Producto**.

### 1. Total de contraseñas posibles

Se calcula así:

```
Letras mayúsculas sin repetir: 26 × 25 × 24
Dígitos sin repetir: 10 × 9 × 8
Símbolos sin repetir: 5 × 4
```

Total:

```
(26 × 25 × 24) × (10 × 9 × 8) × (5 × 4) = 224.640.000
```

---

### 2. Probabilidad de que comience con "AB"

```
P = 1 / 650 ≈ 0.153846%
```

---

### 3. Caso con un dígito extra entre símbolos

Si se agrega un cuarto dígito:

```
Nuevo total: 1.572.480.000
Nuevas contraseñas posibles:
1.572.480.000 - 224.640.000 = 1.347.840.000
```

Aumento del espacio de claves:

```
600%
```

---

### 4. ¿Por qué se usa la Regla del Producto?

Porque la construcción de la contraseña se hace mediante **decisiones sucesivas obligatorias**:

- elegir letras
- luego elegir dígitos
- luego elegir símbolos

No son alternativas excluyentes, por eso **se multiplican las opciones y no se suman**.

---

## Interacción de la aplicación

### Botón **Generar 1**

Genera una sola contraseña temporal y la valida automáticamente.

### Botón **Generar 10**

Genera un lote de 10 contraseñas válidas.

### Botón **Reset**

Limpia toda la información mostrada en pantalla.

### Iconos de ojo

Permiten mostrar u ocultar la contraseña principal y cada una de las contraseñas del lote.

---

## Decisiones de diseño

Durante el desarrollo se tomaron las siguientes decisiones técnicas:

- Separar la lógica de generación y validación fuera de los componentes
- Usar estado local en React para controlar visualización y datos
- Mostrar las contraseñas ocultas por defecto para una experiencia más realista
- Agregar iconos visuales personalizados en lugar de emojis
- Mantener una interfaz clara, oscura y centrada para mejorar la exposición del proyecto

---

## Autora

Proyecto desarrollado como solución a un ejercicio académico sobre generación de credenciales y aplicación de la **Regla del Producto**.

**Manuela Gómez Chaparro**