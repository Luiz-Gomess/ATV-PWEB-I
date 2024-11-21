class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome");
        const codigoElemento = document.querySelector("#codigo");
        const disciplinaInserida = this.servico.inserir(codigoElemento.value, nomeElemento.value);
        const listadisciplinasElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirdisciplinaNoHtml(disciplinaInserida, listadisciplinasElemento);
        }
    }

    inserirdisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Codigo: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }
}
