//Aquí definimos la forma de los datos que la app va a devolver cuando esté validando las contraseñas o calculando resultados

//Son como contratos, entonces deben devolver un objeto con esas propiedades y esos tipos
export type PasswordValidation = {
    ok: boolean;
    errors: string[]; //Un mensaje de error si la contra falla
};

//Para calcular que tan probable es X
export type ProbResult ={
    fraction: string;
    percent: number;
};

//Para calcular la variación al aumentar carácteres 
export type Variant3Result ={
    total: number;
    extra: number;
    increasePercent: number;
};