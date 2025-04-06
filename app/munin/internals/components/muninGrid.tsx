'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedMuninGrid from './CustomizedMuninGrid';
import Copyright from './Copyright';

type Transacao = {
  data: string;
  descricao: string;
  valor: number;
};

type Props = {
  transacoes: Transacao[];
};

export default function MuninGrid({ transacoes }: Props) {
  const columns = [
    { field: 'data', headerName: 'Data', flex: 1 },
    { field: 'descricao', headerName: 'Descrição', flex: 2 },
    {
      field: 'valor',
      headerName: 'Valor (R$)',
      flex: 1,
      valueFormatter: (params: any) => `R$ ${params.value.toFixed(2)}`,
    },
  ];

  const rows = transacoes.map((t, index) => ({
    id: index,
    ...t,
  }));

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' }, mx: 'auto' }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '3fr 1fr' },
          gap: 2,
        }}
      >
        <Box>
          <CustomizedMuninGrid />
        </Box>
        <Box>{/* Barra lateral sem conteúdo */}</Box>
      </Box>

      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
