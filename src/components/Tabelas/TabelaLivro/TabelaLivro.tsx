import { useEffect, useState } from 'react';
import LivroRequests from '../../../fetch/LivroRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import estilo from '../Tabelas.module.css';

function TabelaLivro() {
    const [livros, setLivros] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
    const paginatorRight = <Button type="button" icon="pi pi-download" text />

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const livrosData = await LivroRequests.listaLivros();
                setLivros(livrosData);
            } catch (error) {
                console.error(`Erro ao chamar a API: ${error}`);
            }
        };
        fetchLivros();
    }, []);

    const formatoMoedaReal = (value: any) => {
        const numero = Number(value);
        return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };
    

    return (
        <div className={estilo.table_container}>
            <DataTable 
                value={livros} 
                paginator 
                rows={5} 
                header="Lista de Livros"
                rowsPerPageOptions={[5, 10, 25, 50]} 
                tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" 
                paginatorLeft={paginatorLeft} 
                paginatorRight={paginatorRight}
                className={estilo.tabela}
            >
                <Column field="titulo" header="Título" style={{ width: '20%' }}></Column>
                <Column field="autor" header="Autor" style={{ width: '20%' }}></Column>
                <Column field="editora" header="Editora" style={{ width: '20%' }}></Column>
                <Column field="isbn" header="ISBN" style={{ width: '20%' }}></Column>
                <Column field="valorAquisicao" header="Valor Aquisição" body={(rowData) => formatoMoedaReal(rowData.valorAquisicao)} style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}

export default TabelaLivro;
