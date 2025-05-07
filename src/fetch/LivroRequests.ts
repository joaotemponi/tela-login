// Importa as configurações do servidor a partir de um arquivo externo
import { SERVER_CFG } from "../appConfig";
import LivroDTO from "../interfaces/LivroInterface";

/**
 * Classe responsável por fazer as requisições relacionadas aos livros
 * Esta classe irá se comunicar com a API para listar, cadastrar, atualizar e remover livros
 */
class LivroRequests {

    private serverURL: string;          // URL base do servidor da API
    private routeListaLivros: string;   // Rota (endpoint) para buscar a lista de livros
    private routeCadastraLivro: string; // Rota para cadastrar um novo livro
    private routeAtualizaLivro: string; // Rota para atualizar os dados de um livro
    private routeRemoveLivro: string;   // Rota para remover um livro

    /**
     * O construtor é chamado automaticamente quando criamos uma nova instância da classe.
     * Ele define os valores iniciais das variáveis com base nas configurações da API.
     */
    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;         // Endereço do servidor web
        this.routeListaLivros = '/lista/livros';        // Define a rota para listar os livros
        this.routeCadastraLivro = '/novo/livro';        // Define a rota para cadastrar livros
        this.routeAtualizaLivro = '/atualiza/livro';    // Define a rota para atualizar livros
        this.routeRemoveLivro = '/remove/livro';        // Define a rota para remover livros
    }

    /**
     * Método que faz uma requisição à API para buscar a lista de livros cadastrados
     * @returns Retorna um JSON com a lista de livros ou null em caso de erro
     */
    async listarLivros(): Promise<LivroDTO | null> {
        try {
            // Faz a requisição GET para a rota da lista de livros
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivros}`);
        
            // Verifica se a resposta da API foi bem-sucedida (status 200-299)
            if(respostaAPI.ok) {
                // Converte a resposta para formato JSON
                const listaDeLivros: LivroDTO = await respostaAPI.json();

                // Retorna a lista de livros
                return listaDeLivros;
            }

            // retorna um valor nulo caso o servidor não envie a resposta
            return null;
        } catch (error) {
            // Caso ocorra algum erro (ex: servidor fora do ar), exibe no console
            console.error(`Erro ao fazer a consulta de livros: ${error}`);

            // Retorna null para indicar que a operação falhou
            return null;
        }
    }

    /**
     * Envia os dados do formulário aluno para a API
     * @param formAluno Objeto com os valores do formulário
     * @returns **true** se cadastro com sucesso, **false** se falha
     */
    async enviaFormularioLivro(formLivro: string): Promise<boolean> {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeCadastraLivro}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formLivro
            });

            if(!respostaAPI.ok) {
                throw new Error('Erro ao fazer requisição com o servidor.');
            }

            return true;
        } catch (error) {
            console.error(`Erro ao enviar o formulário. ${error}`);
            return false;
        }
    }
}

// Exporta a classe já com um objeto instanciado para ser usado diretamente
export default new LivroRequests();
