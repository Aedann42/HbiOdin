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


const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridhuginCustomizations,
  ...treeViewCustomizations,
};

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
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
        <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
