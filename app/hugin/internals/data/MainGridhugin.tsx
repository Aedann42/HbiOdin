'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, TextField } from '@mui/material';

// ✅ LINHAS INICIAIS
const initialRows: any[] = [];

const columns: GridColDef[] = [
  { field: 'cnpj', headerName: 'CNPJ', width: 180 },
  { field: 'socio', headerName: 'Sócio', width: 200 },
  { field: 'cargo', headerName: 'Cargo', width: 150 },
  { field: 'endereco', headerName: 'Endereço', width: 300 },
  { field: 'contato', headerName: 'Contato', width: 200 },
];

// ✅ ESTADO PARA ARMAZENAR LINHAS
const CustomizedDataGrid = () => {
  const [rows, setRows] = React.useState(initialRows);
  const [cnpjInput, setCnpjInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // ✅ FUNÇÃO PARA BUSCAR DADOS DA API
//Se der erro é necessário solicitar o acesso temporário ao cors-demo 
//https://cors-anywhere.herokuapp.com/corsdemo CNPJ exemplo: 04849745000180


  const fetchCnpjData = async () => {
    setLoading(true);
    try {
      const cleanedCnpj = cnpjInput.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/v1/cnpj/${cleanedCnpj}`);
      const data = await response.json();

      if (data.status !== 'OK') {
        alert('CNPJ não encontrado ou inválido.');
        return;
      }

      const endereco = `${data.logradouro}, ${data.numero} - ${data.bairro}, ${data.municipio}/${data.uf}`;
      const contato = `${data.telefone ?? ''} ${data.email ?? ''}`.trim();

      const socios = data.qsa.map((pessoa: any, index: number) => ({
        id: `${cleanedCnpj}-${index}`,
        cnpj: data.cnpj,
        socio: pessoa.nome,
        cargo: pessoa.qual,
        endereco,
        contato,
      }));

      setRows(socios);
    } catch (error) {
      alert('Erro ao buscar dados do CNPJ.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* ✅ CAMPO DE BUSCA */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Digite o CNPJ"
          variant="outlined"
          size="small"
          value={cnpjInput}
          onChange={(e) => setCnpjInput(e.target.value)}
        />
        <Button variant="contained" onClick={fetchCnpjData} disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </Button>
      </Box>

      {/* ✅ DATAGRID */}
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default CustomizedDataGrid;
