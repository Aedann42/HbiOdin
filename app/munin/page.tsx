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
import MuninGrid from './internals/components/muninGrid';
 // ✅ Importando o componente MuninGrid que é personalizado
import SideMenu from '../components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  treeViewCustomizations,
} from '../theme/customizations';

import { useSaldo } from '../uteis/SaldoContext'; 
import { Button } from '@mui/material'; 

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...treeViewCustomizations,
};

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  const { saldo, adicionarSaldo, gerarTransacaoAleatoria, transacoes } = useSaldo();
 // ✅ Hook

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
            backgroundColor: theme.cssVariables
              ? `rgba(${theme.cssVariables.palette.background.defaultChannel} / 1)`
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

            {/* ✅ Painel de Saldo */}
            <Box sx={{ textAlign: 'center' }}>
              <h2>Saldo: R$ {saldo.toFixed(2)}</h2>
              <Button variant="contained" onClick={() => adicionarSaldo(100)} sx={{ mr: 2 }}>
                Adicionar R$100
              </Button>
              <Button variant="outlined" onClick={gerarTransacaoAleatoria}>
                Transação Aleatória
              </Button>
            </Box>

            <MuninGrid transacoes={transacoes} />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
