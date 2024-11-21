class DisciplinaRepositorio {
    constructor (){
        this.disciplinas = []
    }

    inserir(newDisciplina){
        this.disciplinas.push(newDisciplina);
    }

    remover(codigo){
        const indiceDisciplina = this.lista.findIndex(disciplina => disciplina.codigo === codigo)
        if(indiceDisciplina > -1) {
            this.disciplinas.splice(indiceDisciplina, 1);
        }
    }

    listar(){
    return this.disciplinas;
    }
}