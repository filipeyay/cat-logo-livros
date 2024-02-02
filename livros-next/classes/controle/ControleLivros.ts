import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
  new Livro(
    1,
    1,
    "Use a Cabeça! Java",
    "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e java.",
    ["Bert Bates", "Kathy Sierra"]
  ),

  new Livro(
    2,
    2,
    "Java, Como Programar",
    "Mihões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.",
    ["Paul Deitel", "Harvey Deitel"]
  ),

  new Livro(
    3,
    3,
    "Core Java for the Impatient",
    "Readers familiar with Horstmann's original, two-volume 'Core Java' books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how thes new features impact the language and core libraries.",
    ["Cay Horstmann"]
  ),
];

class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = Math.max(...livros.map((l) => l.codigo)) + 1;
    novoLivro.codigo = novoCodigo;
    livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivro;
