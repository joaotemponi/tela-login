/**
 * Interface para representar os dados do livro recebidos da API
 */
interface LivroDTO {
    idLivro?: number;               // ID do livro (? indica um parâmetro opcional)
    statusLivro?: boolean;         // Status do livro no sistema (ativo/inativo)
    titulo?: string;               // Título do livro
    autor?: string;                // Autor do livro
    editora?: string;              // Editora responsável pela publicação
    anoPublicacao?: string;        // Ano de publicação do livro
    isbn?: string;                 // Código ISBN do livro
    quantTotal?: number;           // Quantidade total de exemplares cadastrados
    quantDisponivel?: number;      // Quantidade de exemplares disponíveis para empréstimo
    valorAquisicao?: string;       // Valor de aquisição do livro
    statusLivroEmprestado?: string // Status de empréstimo do livro (ex: "emprestado", "disponível")
}

export default LivroDTO;