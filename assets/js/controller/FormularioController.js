import { FormularioView } from "../view/FormularioView.js";
import { PopUpView } from "../view/PopUpView.js";
export class FormularioController{

    constructor(listaDeCursoController){
        this.listaDeCursoController = listaDeCursoController;
        this.formularioView = new FormularioView(this);
        this.popUpView = new PopUpView();
        this.adicionarEventoAoBotaoSalvar();
    }

    adicionarProximoIdNoFormulario(){
       let ultimoIdUsado = this.listaDeCursoController.retornarUltimoIdUsado();
       this.formularioView.adicionarProximoIdAoFormulario(ultimoIdUsado + 1)
    }

    adicionarEventoAoBotaoSalvar(){
        this.formularioView.adicionarEventoAoBotaoSalvar();
    }

    salvarNovoCursoNaAplicacao(event){
        event.preventDefault();
        const informacoesDoCurso = this.formularioView.recuperarInformacoesDoFormulario();

        if(informacoesDoCurso.verifciarPrenchimentoDosCampos()){
            this.listaDeCursoController.cadastrarNovoCurso(informacoesDoCurso);
            this.listaDeCursoController.carregarCurso(informacoesDoCurso.id);
            this.popUpView.exibirPopUpNaTela("success","Sucesso ao Realizar o cadastro!");
        }else{
            this.popUpView.exibirPopUpNaTela("failure","Todos os campos devem ser prenchidos!!");
        }

        this.formularioView.limparCamposDoFormulario();
        this.adicionarProximoIdNoFormulario();
    }
}