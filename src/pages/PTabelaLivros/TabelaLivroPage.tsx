import TabelaLivro from "../../components/Tabelas/TabelaLivro/TabelaLivro";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Rodape from "../../components/Rodape/Rodape";

function PTabelaEmprestimo() {
    return (
        <div>
            <Cabecalho/>
            <TabelaLivro />
            <Rodape />
        </div>
    );
}

export default PTabelaEmprestimo;
