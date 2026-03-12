//Define las reglas del negocio
export const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); //Split es para separar las letras
export const DIGITS = "0123456789".split("");
export const SYMBOLS = ["!", "@", "#", "$", "%"] as const;

export const PASSWORD_RULES = {
    totalLength: 8,
    lettersCount: 3,
    digitsCount: 3,
    symbolsCount: 2,
} as const;

export type AllowedSyombol = typeof SYMBOLS[number]