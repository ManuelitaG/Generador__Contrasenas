import type { ProbResult, Variant3Result } from "../Models/password.model";

export function countPasswordsBase(): number {
    const letters = 26 * 25 * 24; 
    const digits = 10 * 9 * 8;
    const symbols = 5 * 4;
    return letters * digits * symbols;                     
}

export function probStartsWithAB(): ProbResult {
    return {fraction: "1/650", percent:(1/650)*100};
}

//Sirve para analizar lo que cambió
export function variant3Counts(): Variant3Result{
  const oldTotal = countPasswordsBase();
  const letters = 26 * 25 * 24;        
  const digits = 10 * 9 * 8 *7;       
  const symbols = 5 * 4;               
  const total = letters * digits * symbols;

  return{
    total,
    extra:total-oldTotal,
    increasePercent: ((total/oldTotal)-1)*100,
  };
}