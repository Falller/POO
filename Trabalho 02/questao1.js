/**
 * Crie um objeto do tipo curso que tenha os seguintes atributos:

    nome
    p1
    p2
    media

Usando o setter insira o nome do curso, p1 e p2. Para a média considere a seguinte condição: Se, nota da p1 for 0, retorne a mensagem: "A nota da p1 foi 0, não vai ser possível fazer uma média" Se, nota da p1 maior que 0, faça o seguinte calculo: p1 + p2 / 2

Crie um get que retorne uma mensagem informando o nome do curso e sua média.

 */

let curso = {
    _nome: "",
    _p1: "",
    _p2: "",
    _media: "",

    set nomeCurso(curso) {
        this._nome = curso;
    },

    set nota1 (p1) {
        this._p1 = p1;
    },

    set nota2 (p2) {
        this._p2 = p2;
    },

    get mensagem () {
        if (this._p1 == 0) {
            return "A nota da p1 foi 0, não vai ser possível fazer uma média!"
        } else if (this._p1 < 0) {
            return "A nota da p1 foi negativa, não vai ser possível fazer uma média!"
        } else {
            this._media = (this._p1 + this._p2) / 2;
            return "No curso " + this._nome + " sua média é " + _media + "!"
        }
    },
}

curso.nomeCurso = "POO";
curso.nota1 = 0;
curso.nota2 = 10;
console.log(curso.mensagem);

curso.nota1 = 10;
curso.nota2 = 5;
console.log(curso.mensagem);
