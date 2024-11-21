class Disciplina {
    constructor(codigo, nome){
        this._codigo = codigo;
        this._nome = nome;
        this._arrayAlunos = [];
    }

    get codigo (){
        return this._codigo;
    }

    set codigo (newCodigo){
        this.codigo = newCodigo;
    }

    
    get nome (){
        return this._nome;
    }

    set nome (newNome){
        this.nome = newNome;
    }

    get arrayAlunos (){
        return this._arrayAlunos;
    }
    set arrayAlunos (newAluno) {
        this.arrayAlunos.push(newAluno)
    }

}