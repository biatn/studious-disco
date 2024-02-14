export interface Pessoa extends Mamifero {
    tipoDeCabelo: string;
    corDeCabelo: string;
    tamanhoDeCabelo: number;
    altura: number;
    nome: string;
};

export type Mamifero = {
    tipoDeAlimentacao: string;
    linguagem: string;
}