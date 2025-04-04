import { SERVER_CFG } from '../appConfig';

class LivroRequests {
    private serverURL;
    private routeListaLivro;
    private routeCadastroLivro;
    private routeAtualizaLivro;
    private routeRemoveLivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livros';
        this.routeCadastroLivro = '/cadastro/livro';
        this.routeAtualizaLivro = '/atualiza/livro';
        this.routeRemoveLivro = '/remove/livro';
    }

    async listaLivros() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);
            console.warn(`URL: ${this.serverURL}${this.routeListaLivro}`);
            if (respostaAPI.ok) {
                const listaDeLivros = await respostaAPI.json();
                return listaDeLivros;
            }
        } catch (error) {
            console.log(`Erro ao fazer consulta: ${error}`);
            return null;
        }
    }
}

export default new LivroRequests();
