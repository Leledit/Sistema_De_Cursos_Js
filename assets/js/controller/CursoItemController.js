import { CursoItemView } from "../view/CursoItemView.js";
import { PopUpView } from "../view/PopUpView.js";
export class CursoItemController{
    
    constructor(listaDeCursosController){
        this.listaDeCursosController = listaDeCursosController;
        this.cursoItemView = new CursoItemView(this);
        this.popUpView = new PopUpView();
    }

    exibirCursoSelecionado(cursoSelecionado){
        this.cursoItemView.rederizarCursoSelecionado(cursoSelecionado);
    }

    exibirCurso(cursoSelecionado){
        this.exibirCursoSelecionado(cursoSelecionado);
    }

    adicionarMarcacaoDeFinalizado(idCurso){
        let objetoInforVideo = this.cursoItemView.recuperarInformacoesDoVideo();
        let tempoDecorridoVideo = objetoInforVideo[1] ;
        let tempoTotalVideo = objetoInforVideo[0];
        tempoTotalVideo = tempoTotalVideo - 50;
       
        console.log(tempoDecorridoVideo);
        console.log(tempoTotalVideo);

        if(tempoDecorridoVideo >= tempoTotalVideo){
            this.listaDeCursosController.marcarCursoComoFinalizado(idCurso);
            this.popUpView.exibirPopUpNaTela("success","Curso finalizado com sucesso!!");
        }else{
            this.popUpView.exibirPopUpNaTela("failure","Para terminar o curso é necessario completa-lo");
        }
        this.popUpView.alterarPosicaoDoPopUp();
    }
}