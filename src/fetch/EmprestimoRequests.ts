import { SERVER_CFG } from '../appConfig';

class EmprestimoRequests {
    private serverURL;
    private routeListaEmprestimo;
    private routeCadastroEmprestimo;
    private routeAtualizaEmprestimo;
    private routeRemoveEmprestimo;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaEmprestimo = '/lista/emprestimo';
        this.routeCadastroEmprestimo = '/cadastro/emprestimo';
        this.routeAtualizaEmprestimo = '/atualiza/emprestimo';
        this.routeRemoveEmprestimo = '/remove/emprestimo';
    }
    
    async listaEmprestimos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);
            console.warn(`URL: ${this.serverURL}${this.routeListaEmprestimo}`);
            if (respostaAPI.ok) {
                const listaDeEmprestimos = await respostaAPI.json();
                return listaDeEmprestimos;
            }
        } catch (error) {
            console.log(`Erro ao fazer consulta: ${error}`);
            return null;   
        }
    }
}

export default new EmprestimoRequests();
