import { ListaDeCursosController } from "./controller/ListaDeCursosController.js";
export function $(caminho,tipo = "one"){
    if(tipo == "one"){
        return document.querySelector(caminho);
    }else{
        return document.querySelectorAll(caminho);
    }
}
const listaDeCursosController = new ListaDeCursosController();