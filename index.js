// Definindo a classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para herói atacar
    atacar() {
        let ataque = "";

        // Verificando o tipo do herói
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "não sabe como atacar"; //Caso o tipo não seja reconhecido 
        }

        // Exibindo a mensagem do ataque 
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando um herói
const meuHeroi = new Heroi("Super Kid", 10, "mago");

// Chamando o método de ataque do herói
meuHeroi.atacar();