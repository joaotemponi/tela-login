import { SERVER_CFG } from '../appConfig';

class AlunoRequests {
    private serverURL;
    private routeListaAluno;
    private routeCadastroAluno;
    private routeAtualizaAluno;
    private routeRemoveAluno;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL
        this.routeListaAluno = '/lista/alunos';
        this.routeCadastroAluno = '/cadastro/aluno';
        this.routeAtualizaAluno = '/atualiza/aluno';
        this.routeRemoveAluno = '/remove/aluno';
    }
    
    async listaAlunos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAluno}`) 
            console.warn(`URL: ${this.serverURL}${this.routeListaAluno}`);
            if (respostaAPI.ok) {
                const listaDeAlunos = await respostaAPI.json();
                return listaDeAlunos;
            }
        } catch (error) {
            console.log(`Erro ao fazer consulta: ${error}`);
            return null;   
        }
    }
}

export default new AlunoRequests();
