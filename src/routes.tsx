import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { APP_ROUTES } from './appConfig';
import PHome from './pages/PHome/PHome';
import PLogin from './pages/PLogin/PLogin';
import PTabelaEmprestimo from './pages/PTabelaEmprestimo/TabelaEmprestimoPage.tsx';
import PTabelaLivro from './pages/PTabelaLivros/TabelaLivroPage.tsx';
import PTabelaAluno from './pages/PTabelaAlunos/TabelaAlunoPage.tsx';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome />} />
                <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin />} />
                <Route path={APP_ROUTES.ROUTE_TABELA_EMPRESTIMO} element={< PTabelaEmprestimo/>}/>
                <Route path={APP_ROUTES.ROUTE_TABELA_LIVRO} element={< PTabelaLivro/>}/>
                <Route path={APP_ROUTES.ROUTE_TABELA_ALUNO} element={< PTabelaAluno/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;