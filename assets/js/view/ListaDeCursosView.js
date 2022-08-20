import { $ } from "../main.js";
export class ListaDeCursosView{
    constructor(listaDeCursosController){
        this.localDeExibicaoDosCursos = $("#content-side-bar-itens");
        this.listaDeCursosController = listaDeCursosController;
    }

    rederizarCursosNaTela(listaContendoTodosOsCursos){
        let designerDosItensDeCursos = "";

        listaContendoTodosOsCursos.forEach(curso => {
            designerDosItensDeCursos += this.criandoDesignerDoCurso(curso);
        });
        this.localDeExibicaoDosCursos.innerHTML = designerDosItensDeCursos;
        this.adicionarEventoAoItemDoCurso();
    }

    criandoDesignerDoCurso(curso){
        return `<P id="${curso.id}">${curso.nome} <img src="./assets/img/finalizardo.png"></P>`;
    }

    adicionarEventoAoItemDoCurso(){
        const cursosItens = $("#content-side-bar-itens p","all");
        cursosItens.forEach(curso =>{
            curso.addEventListener("click",(event)=>{
                this.listaDeCursosController.obterDadosDoCursoSelecionado(event.target.id);
            });
        })
    }

    marcarCursoComoFinalizado(idCurso){
        const cursoParaReceberAMarca = document.getElementById(idCurso);
        cursoParaReceberAMarca.lastElementChild.style.display = "block";    
    }
}