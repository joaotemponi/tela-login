import { useEffect, useState } from 'react';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import estilo from '../Tabelas.module.css';

function TabelaEmprestimo() {
    const [emprestimos, setEmprestimos] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
    const paginatorRight = <Button type="button" icon="pi pi-download" text />

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const emprestimo = await EmprestimoRequests.listaEmprestimos();
                setEmprestimos(emprestimo);
            } catch (error) {
                console.error('Erro ao chamar a API: ${error}');
            }
        };
        fetchEmprestimos();
    }, [emprestimos]);
    return (
        <div className={estilo.table_container}>
            <DataTable 
                value={emprestimos} 
                paginator 
                rows={5} 
                header="Lista de Empréstimos"
                rowsPerPageOptions={[5, 10, 25, 50]} 
                tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" 
                paginatorLeft={paginatorLeft} 
                paginatorRight={paginatorRight}
                className={estilo.tabela}
            >
                <Column field="nome" header="Nome Aluno" style={{ width: '10%' }}></Column>
                <Column field="livro" header="Nome Livro" style={{ width: '10%' }}></Column>
                <Column field="Data" header="Sobrenome" style={{ width: '10%' }}></Column>
                <Column field="endereco" header="Endereco" style={{ width: '10%' }}></Column>
                <Column field="email" header="Email" style={{ width: '10%' }}></Column>
            </DataTable>
        </div>
    );
}

export default TabelaEmprestimo;