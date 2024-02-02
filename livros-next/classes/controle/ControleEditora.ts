import Editora from "../modelo/Editora";
const editoras: Array<Editora> = [
  new Editora(1, "Alta Books"),
  new Editora(2, "Bookman"),
  new Editora(3, "Addison Wesley"),
  new Editora(4, "Pearson"),
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}

export default ControleEditora;
