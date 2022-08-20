import { $ } from "../main.js";
import { Curso } from "../model/Curso.js";
export class FormularioView{

    constructor(formularioController){
        this.formularioController = formularioController;
        this.btnSalvar = $("#btnSalvar");
        this.campoId = $("#campoId");
        this.campoNome = $("#campoNome");
        this.campoDescricao = $("#campoDescricao");
        this.campoVideo = $("#campoVideo");
    }

    adicionarProximoIdAoFormulario(proximoId){
        this.campoId.value = proximoId;
    }

    adicionarEventoAoBotaoSalvar(){
        this.btnSalvar.addEventListener("click",(event)=>{
            this.formularioController.salvarNovoCursoNaAplicacao(event);
        });
    }

    recuperarInformacoesDoFormulario(){
        return new Curso(
            this.campoId.value,
            this.campoNome.value,
            this.campoDescricao.value,
            this.campoVideo.value
        )
    }

    limparCamposDoFormulario(){
        this.campoNome.value = "";
        this.campoDescricao.value = "";
        this.campoVideo.value = "";
    }
}