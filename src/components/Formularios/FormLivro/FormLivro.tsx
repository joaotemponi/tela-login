import { useState } from 'react';
import estilo from './FormLivro.module.css';
import LivroRequests from '../../../fetch/LivroRequests';

function FormLivro() {
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: '',
        isbn: '',
        quantTotal: 0,
        quantDisponivel: 0,
        valorAquisicao: 0
    });

    // Função para atualizar o state
    const handleChange = (titulo: string, valor: string) => {
        setFormData({ ...formData, [titulo]: valor });
    };

    // função para recuperar dados do formulário e enviar para a requisição
    const handleSubmit = async () => {
        const dadosFormatados = {
            ...formData,
            quantTotal: Number(formData.quantTotal),
            quantDisponivel: Number(formData.quantDisponivel),
            valorAquisicao: Number(formData.valorAquisicao),
        };

        const resposta = await LivroRequests.enviaFormularioLivro(JSON.stringify(dadosFormatados));
        if(resposta) {
            alert('Livro cadastrado com sucesso.');
        } else {
            alert('Erro ao cadastrar Livro.');
        }
    }

    return (
        <section className={estilo['sec-form-livro']}>
            <h1>Cadastro Livro</h1>
            <form action="post" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
                    className={estilo['form-livro']}
                >
                    <label htmlFor="">
                        titulo
                        <input
                            type="text"
                            name="titulo"
                            id="titulo"
                            required
                            maxLength={200}
                            onChange={(e) => handleChange("titulo", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        autor
                        <input
                            type="text"
                            name="autor"
                            id="autor"
                            required
                            maxLength={150}
                            onChange={(e) => handleChange("autor", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        editora
                        <input
                            type="text"
                            name="editora"
                            id="editora"
                            onChange={(e) => handleChange("editora", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        ano de publicacao
                        <input
                            type="text"
                            name="anoPublicacao"
                            id="anoPublicaco"
                            maxLength={5}
                            onChange={(e) => handleChange("anoPublicacao", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        isbn
                        <input
                            type="text"
                            name="isbn"
                            id="isbn"
                            maxLength={20}
                            onChange={(e) => handleChange("isbn", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        quantidade total
                        <input
                            type="number"
                            name="quantTotal"
                            id="quantTotal"
                            onChange={(e) => handleChange("quantTotal", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        quantidade disponivel
                        <input
                            type="number"
                            name="quantDisponivel"
                            id="quantDisponivel"
                            onChange={(e) => handleChange("quantDisponivel", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        valor aquisição
                        <input
                            type="number"
                            name="valorAquisicao"
                            id="valorAquisicao"
                            step={0.01}
                            onChange={(e) => handleChange("valorAquisicao", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        status livro emprestado
                        <input
                            type="text"
                            name="statusLivroEmprestado"
                            id="statusLivroEmprestado"
                            onChange={(e) => handleChange("statusLivroEmprestado", e.target.value)}
                        />
                    </label>
                <input type="submit" value="ENVIAR" />
            </form>
        </section>
    );
}

export default FormLivro;
