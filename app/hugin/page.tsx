'use client';
import * as React from 'react';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from '../components/AppNavbar';
import Header from '../components/Header';
import MainGrid from './internals/data/MainGridhugin';
import SideMenu from '../components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
  chartsCustomizations,
  treeViewCustomizations,
} from '../theme/customizations';
import { dataGridhuginCustomizations } from '../theme/customizations/dataGridhugin';
import axios from 'axios'; // ✨ Magia do Harry Potter 
import type {} from '@mui/material/themeCssVarsAugmentation';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridhuginCustomizations,
  ...treeViewCustomizations,
};


export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  const [dados, setDados] = React.useState([]); 

  React.useEffect(() => {
    const buscarDados = async () => {
      try {
        const response = await axios.post('/api/hugin', {
          pergunta: 'qualquer pergunta de exemplo',
        });
        console.log('📡 Dados recebidos da API Hugin:', response.data);
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao chamar a API Hugin:', error);
      }
    };

    buscarDados();
  }, []);

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
