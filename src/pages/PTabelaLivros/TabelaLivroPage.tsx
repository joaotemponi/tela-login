import TabelaLivro from "../../components/Tabelas/TabelaLivro/TabelaLivro";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Rodape from "../../components/Rodape/Rodape";
import { useNavigate } from "react-router-dom";

function PTabelaEmprestimo() {
    const navigate = useNavigate();

    return (
        <div>
            <Cabecalho />
            <button onClick={() => navigate('/cadastrar-livro')}>Cadastrar Livro</button>
            <TabelaLivro />
            <Rodape />
        </div>
    );
}

export default PTabelaEmprestimo;
