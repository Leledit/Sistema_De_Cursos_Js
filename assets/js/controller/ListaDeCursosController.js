import { CursoItemController } from "./CursoItemController.js";
import { FormularioController } from "./FormularioController.js";
import { Curso } from "../model/Curso.js";
import { ListaDeCursosView } from "../view/ListaDeCursosView.js";
import { PopUpView } from "../view/PopUpView.js";

export class ListaDeCursosController{
    
    constructor(){
        this.cursoItemController = new CursoItemController(this);
        this.formularioController = new FormularioController(this);
        this.listaDeCursosView = new ListaDeCursosView(this);
        this.popUpView = new PopUpView();
        this.listaDeCursos = [];
        this.cadastrarRegistrosIniciaisNaAplicacao();
        this.carregarCursoInicial();
    }
    
    carregarCursoInicial(){
        this.cursoItemController.exibirCurso(this.listaDeCursos[0]);
    }

    carregarCurso(idCurso){
        const posicaoCurso = this.buscarPosicaoDeCursoComBaseNoId(idCurso);
        this.cursoItemController.exibirCurso(this.listaDeCursos[posicaoCurso]);
    }

    cadastrarRegistrosIniciaisNaAplicacao(){
        this.cadastrarNovoCurso(new Curso(1,'Apresentação a linguagem','Uma panorama breve sobre a linguagem de programação javascript','Video 1.mp4'))
        this.cadastrarNovoCurso(new Curso(2,'Preparando o ambiente de desenvolvimento','Para se programar em javaScrip é necessario realizar algumas preparaçoes iniciais','Video 2.mp4'))
        this.cadastrarNovoCurso(new Curso(3,'Conceitos basicos','Conceitos basicos da linguagem javascrip, para voce começar com tudo nesse novo mundo','Video 3.mp4'))
        this.formularioController.adicionarProximoIdNoFormulario();
    }

    cadastrarNovoCurso(instanciaDeUmNovoCurso){
        this.listaDeCursos.push(instanciaDeUmNovoCurso);
        this.listaDeCursosView.rederizarCursosNaTela(this.listaDeCursos);
    }
    
    obterDadosDoCursoSelecionado(idCursoSelecionado){
        let cursoSelecionado = this.listaDeCursos[this.buscarPosicaoDeCursoComBaseNoId(idCursoSelecionado)];
        this.cursoItemController.exibirCursoSelecionado(cursoSelecionado);
    }

    buscarPosicaoDeCursoComBaseNoId(idCursoSelecionado){
        let posicaoCurso;
        for(let i=0; i< this.listaDeCursos.length;i++){
            if(idCursoSelecionado == this.listaDeCursos[i].id){
                posicaoCurso = i;
            }
        }
        return posicaoCurso;
    }

    marcarCursoComoFinalizado(idCurso){
        this.listaDeCursosView.marcarCursoComoFinalizado(idCurso);
    }

    retornarUltimoIdUsado(){
        let ultimoCursoAdicionado = this.listaDeCursos.length;
        return ultimoCursoAdicionado;
    }
}