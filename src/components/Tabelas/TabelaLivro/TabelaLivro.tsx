import { useEffect, useState } from 'react';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function TabelaEmprestimo() {
    const [livros, setLivros] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
    const paginatorRight = <Button type="button" icon="pi pi-download" text />

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const livrosData = await EmprestimoRequests.listaLivros();
                setLivros(livrosData);
            } catch (error) {
                console.error(`Erro ao chamar a API: ${error}`);
            }
        };
        fetchLivros();
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
        <>
            <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="titulo" header="Título" style={{ width: '20%' }}></Column>
                <Column field="autor" header="Autor" style={{ width: '20%' }}></Column>
                <Column field="editora" header="Editora" style={{ width: '20%' }}></Column>
                <Column field="isbn" header="ISBN" style={{ width: '20%' }}></Column>
                <Column field="valorAquisicao" header="Valor Aquisição" body={(rowData) => formatCurrency(rowData.valorAquisicao)} style={{ width: '20%' }}></Column>
            </DataTable>
        </>
    );
}

export default TabelaEmprestimo;