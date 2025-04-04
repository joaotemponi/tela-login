import TabelaEmprestimo from '../../components/Tabelas/TabelaEmprestimo/TabelaEmprestimo';
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Rodape from "../../components/Rodape/Rodape";

function TabelaEmprestimoPage() {
    return (
        <div>
            <Cabecalho />
            <TabelaEmprestimo />
            <Rodape />
        </div>
    );
}

export default TabelaEmprestimoPage;
