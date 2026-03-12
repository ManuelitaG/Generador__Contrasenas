import { PASSWORD_RULES, SYMBOLS } from "../Models/password.rules";
import type { PasswordValidation } from "../Models/password.model";

//verifica que cumple con las reglas después de generar la contraseña

export function validatePassword(pwd: string): PasswordValidation{
    const errors: string[] = [];
    
    if(pwd.length !== PASSWORD_RULES.totalLength) errors.push("Longitud distinta de 8.");

    const a = pwd.slice(0,3);
    const b = pwd.slice(3,6);
    const c = pwd.slice(6,8);

    const isUpper = (ch: string) => ch >= "A" && ch <= "Z";
    const isDigit = (ch: string) => ch >= "0" && ch <= "9";
    const isSymbol = (ch: string) => (SYMBOLS as readonly string[]).includes(ch);

    if(![...a].every(isUpper)) errors.push("Primeros 3 no son letras mayúsculas A-Z");
    if(![...b].every(isDigit)) errors.push("Siguientes 3 no son digitos 0-9");
    if(![...c].every(isSymbol)) errors.push("Últimos 2 no son símbolos validos (!,@,#,$,%)");

    const noRepeat = (s:string) => new Set(s.split("")).size === s.length;
    if(!noRepeat(a)) errors.push("Hay repetidos en la sección de letras.");
    if(!noRepeat(b)) errors.push("Hay repetidos en la sección de dígitos.");
    if(!noRepeat(c)) errors.push("Hay repetidos en la sección de símbolos.");

    return { ok: errors.length === 0, errors};
}