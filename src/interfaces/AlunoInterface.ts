/**
 * Interface para representar os dados do aluno recebidos da API
 */
interface AlunoDTO {
    idAluno?: number;       // ID do aluno (? indica um parâmetro opcional)
    ra?: string;            // RA do aluno
    statusAluno?: boolean;  // Status do aluno no sistema
    nome?: string;          // Nome do aluno
    sobrenome?: string;     // Sobrenome do aluno
    dataNascimento?: Date;  // Data de nascimento do aluno
    endereco?: string;      // Endereço do aluno
    email?: string;         // E-mail do aluno
    celular?: string;       // Celular do aluno
}

export default AlunoDTO;