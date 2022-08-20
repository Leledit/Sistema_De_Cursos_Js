import { $ } from "../main.js";
export class CursoItemView{

    constructor(cursoItemController){
        this.cursoItemController = cursoItemController;
        this.localExibicaoCurso = $(".content-main");
    }

    rederizarCursoSelecionado(curso){
        this.localExibicaoCurso.innerHTML = this.criandoDeseigner(curso);
        this.adicionarEventoAoBotaoFinalizar();
    }

    criandoDeseigner(curso){
    return `
        <div class="content-main-item">
            <h1>${curso.nome}</h1>
            <p><strong>Descricação :</strong> ${curso.descricao}</p>
            <video src="assets/videos/${curso.video}" controls ></video>
            <button id="${curso.id}" data-btnFinalizar="">Finalizar</button>
        </div>`;
    }

    adicionarEventoAoBotaoFinalizar(){
        const btnFinalizar = $("[data-btnFinalizar]");
        btnFinalizar.addEventListener("click", (event) =>{
            this.cursoItemController.adicionarMarcacaoDeFinalizado(event.target.id);
        });
    }

    recuperarInformacoesDoVideo(){
        const video = $(".content-main-item video");
        let duracaoVideo = video.duration;
        let tempoAtualVideo = video.currentTime;
        let objetoInfoVideo =[
            duracaoVideo,
            tempoAtualVideo 
        ]
        return objetoInfoVideo;
    }
}