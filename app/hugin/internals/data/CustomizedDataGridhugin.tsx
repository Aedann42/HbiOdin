import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'cnpj', headerName: 'CNPJ', width: 120 },
  { field: 'socios', headerName: 'Sócios', width: 300 },
  { field: 'endereco', headerName: 'Endereço', width: 300 },
  {
    field: 'contatos',
    headerName: 'Contatos',
    flex: 1,
    type: 'number',
    align: 'center',
    headerAlign: 'center',
  },
];

export const rows = [];
