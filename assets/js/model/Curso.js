export class Curso{

    id;
    nome;
    descricao;
    video;

    constructor(id,nome,descricao,video){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.video = video;
    }

    verifciarPrenchimentoDosCampos(){
        if((this.nome != "")&&(this.descricao != "")&&(this.video != "")){
            return true;
        }else{
            return false;
        }
    }
}