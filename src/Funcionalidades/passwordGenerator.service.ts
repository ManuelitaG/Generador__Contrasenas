import { DIGITS, LETTERS, SYMBOLS, PASSWORD_RULES } from "../Models/password.rules";

//Aquí está la lógica del programa, son las funciones que hacen el trabajo usando las reglas del modelo
function randInt(maxExclusive: number){
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf); // Genera nnúmeros aleatorios criptográficamente seguros con la función del Web Crypto Api del navegador.
    return buf[0] % maxExclusive;
}

function pickDistinct<T>(pool: readonly T[], k: number): T[] {
    if(k > pool.length) throw new Error("K mayor que pool");
    const arr = pool.slice() as T[];
    for (let i = 0; i < k; i++){
        const j=i + randInt(arr.length - i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    } //Fisher-Yates Shuffle.
    return arr.slice(0, k)
}

export function generateTempPassword(): string {
    const letters = pickDistinct(LETTERS, PASSWORD_RULES.lettersCount);
    const digits = pickDistinct(DIGITS, PASSWORD_RULES.digitsCount);
    const symbols = pickDistinct(SYMBOLS, PASSWORD_RULES.symbolsCount);
    return[...letters, ...digits, ...symbols].join("");
}