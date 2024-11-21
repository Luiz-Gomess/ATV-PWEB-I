class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo ,nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);

        if (disciplinaPesquisada.length > 0) {
            throw new Error('Discplina já cadastrada!');
        }


        const discplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(discplinaNova);
        return discplinaNova;
    }

    inserirAlunoNaDisciplina(codigo, matricula){
        const aluno = this.pesquisarPorMatricula(matricula);
        const disciplina = this.pesquisarPorCodigo(codigo);

        disciplina.arrayAlunos = aluno;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    atualizar(codigo, newNome) {
        const updateDisciplina = this.repositorio.listar().filter(disciplina => disciplina.codigo = codigo);
        updateDisciplina.nome = newNome;
    }
}
