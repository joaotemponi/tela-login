import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Welcome from "../../components/Welcome/Welcome";
import Rodape from "../../components/Rodape/Rodape";
import TabelaAluno from "../../components/Tabelas/TabelaAluno/TabelaAluno";

function PHome() {
    return (
        <>
            <Cabecalho />
            <Welcome />
            <Rodape />
        </>
    );
}

export default PHome;