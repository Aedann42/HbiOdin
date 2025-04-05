import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedDataGrid from './CustomizedDataGrid';
import Copyright from '../munin/internals/components/Copyright';

export default function MainGrid() {
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
          <CustomizedDataGrid />
        </Box>
        <Box>
          {/* Barra lateral sem conteúdo */}
        </Box>
      </Box>

      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
