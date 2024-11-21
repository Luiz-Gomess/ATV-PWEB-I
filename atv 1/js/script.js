// const nomes = ['Ana', 'Carla', 'Trísia'];

const usuarios = [
    {nome: "Fulano", idade: 10, cpf: "1234"},
    {nome: "Ciclano", idade: 13, cpf: "6543"},
    {nome: "Beltrano", idade: 15, cpf: "0984"},
]

const listaNomesElement = document.createElement('ul');

document.body.appendChild(listaNomesElement);

for (let usuario of usuarios) {
    inserirNomeNaLista(usuario);
}

function inserirUsuario() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCPFElement = document.querySelector('#cpf');
    inserirNomeNaLista({nome:inputNomeElement.value, idade:inputIdadeElement.value, cpf:inputCPFElement.value});
}

function inserirNomeNaLista(usuario) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.textContent = 'Nome : ' + usuario.nome + ', Idade : ' + usuario.idade + ', CPF : ' + usuario.cpf + ' ';

    spanElement.addEventListener('click', event => {
        const inputElement = document.createElement('input');
        inputElement.value = usuario.nome;
        liElement.appendChild(inputElement);
        spanElement.remove();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaNomesElement.appendChild(liElement);
}



