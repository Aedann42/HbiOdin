import { GridColDef } from '@mui/x-data-grid';

export const rows = [];

export const columns: readonly GridColDef[] = [
  { field: 'data', headerName: 'Data', flex: 1 },
  { field: 'descricao', headerName: 'Descrição', flex: 2 },
  { field: 'valor', headerName: 'Valor', flex: 1, type: 'number', align: 'center', headerAlign: 'center' },
];
