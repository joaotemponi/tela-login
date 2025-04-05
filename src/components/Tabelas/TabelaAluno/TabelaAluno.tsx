import { useEffect, useState } from 'react';
import AlunoRequests from '../../../fetch/AlunoRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import estilo from '../Tabelas.module.css';

function TabelaAluno() {
    const [alunos, setAlunos] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
    const paginatorRight = <Button type="button" icon="pi pi-download" text />

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const aluno = await AlunoRequests.listaAlunos();
                setAlunos(aluno);
            } catch (error) {
                console.error('Erro ao chamar a API: ${error}');
            }
        };
        fetchAlunos();
    }, [alunos]);

    const formatarData = (rowData: any) => {
        const data = new Date(rowData.dataNascimento);
        return data.toLocaleDateString('pt-BR');
    };

    return (
        <div className={estilo.table_container}>
            <DataTable
                value={alunos}
                paginator
                rows={5}
                header="Lista de Alunos"
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}"
                paginatorLeft={paginatorLeft}
                paginatorRight={paginatorRight}
                className={estilo.tabela}
            >
                <Column field="nome" header="Nome"></Column>
                <Column field="sobrenome" header="Sobrenome"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="endereco" header="Endereço"></Column>
                <Column field="dataNascimento" body={formatarData} header="Data de nascimento"></Column>
                <Column field="celular" header="Celular"></Column>
            </DataTable>
        </div>
    );
}

export default TabelaAluno;