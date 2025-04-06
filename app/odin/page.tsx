"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from '../components/ForgotPassword';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { OdinOlhoIcon } from '../components/CustomIcons';
import { validarDocumento } from '../uteis/Validador';
import { Router } from 'next/router';
import { useRouter } from "next/navigation";


const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const [cpfError, setcpfError] = React.useState(false);
  const [cpfErrorMessage, setcpfErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [cpf, setCpf] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);

  React.useEffect(() => {
    const remembered = localStorage.getItem('rememberLogin') === 'true';
    const savedCPF = localStorage.getItem('rememberedCPF') || '';
  
    if (remembered) {
      setRememberMe(true);
      setCpf(savedCPF);
    }
  }, []);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // sempre previne o submit padrão
    if (!validateInputs()) {
      return; 
    }
    const data = new FormData(event.currentTarget);
    if (data.get('cpf') === '12570967610' && data.get('password') === 'Odincaolho42!') {
      if (rememberMe) {
        localStorage.setItem('rememberedCPF', data.get('cpf') as string);
        localStorage.setItem('rememberLogin', 'true');
      } else {
        localStorage.removeItem('rememberedCPF');
        localStorage.removeItem('rememberLogin');
      }
      router.push('/hugin');
    } else {
      alert('Falhou com Odin! Verifique a palavra-passe.');
    }
  
    console.log({
      cpf: data.get('cpf'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const cpf = document.getElementById('cpf') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!cpf.value || !validarDocumento(cpf.value)) {
      setcpfError(true);
      setcpfErrorMessage('Confira o seu CPF por favor');
      isValid = false;
    } else {
      setcpfError(false);
      setcpfErrorMessage('');
    }

    const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!password.value || !senhaForteRegex.test(password.value)) {
      setPasswordError(true);
      setPasswordErrorMessage(
        'A senha deve ter ao menos 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.'
      );
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }
    return isValid;
  };
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Card variant="outlined">
          <OdinOlhoIcon/>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="cpf">cpf</FormLabel>
              <TextField
             error={cpfError}
              helperText={cpfErrorMessage}
              id="cpf"
             type="text"
             name="cpf"
             placeholder="Seu CPF"
              autoComplete="cpf"
              required
              fullWidth
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              variant="outlined"
              color={cpfError ? 'error' : 'primary'}
              />

            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControlLabel
              control={
              <Checkbox
                color="primary"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="Lembre-se de mim"
          />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit"
             fullWidth
             variant="contained"
            >
            Sign in
</Button>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Esqueceu a senha, foi?
            </Link>
          </Box>
 
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}