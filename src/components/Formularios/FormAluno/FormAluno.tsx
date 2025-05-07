import { useState } from 'react';
import estilo from './FormAluno.module.css';
import AlunoRequests from '../../../fetch/AlunoRequests';

function FormAluno() {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        dataNascimento: '',
        endereco: '',
        email: '',
        celular: ''
    });

    // Função para atualizar o state
    const handleChange = (nome: string, valor: string) => {
        setFormData({ ...formData, [nome]: valor });
    };

    const handleSubmit = async (formData: { nome:string; sobrenome: string; dataNascimento: string; endereco: string; email: string; celular: string;}) => {
        const resposta = await AlunoRequests.enviaFormularioAluno(JSON.stringify(formData))
        if (resposta) {
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Erro ao cadastrar aluno.');
        }
    };

    return (
        <section>
            <form action="post" onSubmit={(e) => {e.preventDefault(); handleSubmit(formData);}}
                className={estilo['form-aluno']}>
                <label htmlFor="">
                    Nome Completo
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        required
                        minLength={3}
                        onChange={(e) => handleChange("nome", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Sobrenome
                    <input
                        type="text"
                        name="sobrenome"
                        id="sobrenome"
                        required
                        minLength={3}
                        onChange={(e) => handleChange("sobrenome", e.target.value)}
                    />
                </label>
                Data de nascimento
                <label htmlFor="">
                    <input
                        type="date"
                        name="dataNascimento"
                        id="dataNascimento"
                        onChange={(e) => handleChange("dataNascimento", e.target.value)}
                    />
                </label>
                Endereço
                <label htmlFor="">
                    <input
                        type="text"
                        name="endereco"
                        id="endereco"
                        required
                        minLength={6}
                        onChange={(e) => handleChange("endereco", e.target.value)}
                    />
                </label>
                Email
                <label htmlFor="">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        minLength={11}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </label>
                Celular
                <label htmlFor="">
                    <input
                        type="number"
                        name="celular"
                        id="celular"
                        required
                        minLength={11}
                        maxLength={13}
                        onChange={(e) => handleChange("celular", e.target.value)}
                    />
                </label>
                <input type="submit" value="CADASTRO ALUNO" />
            </form>
        </section>
    );
}

export default FormAluno;
