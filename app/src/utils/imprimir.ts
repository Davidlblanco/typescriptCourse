import { Negociacao } from "../models/negociacao";
import { Imprimivel } from "./imprimivel";

export function imprimir(...objtos: Array<Imprimivel>) {
    for (let objto of objtos) {
        console.log(objto.paraTexto())
    }

}