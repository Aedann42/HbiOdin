"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material";

export default function Login() {
  const [cpf, setcpf] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de autenticação (AQUI você colocaria lógica real de autenticação)
    if (cpf === "admin@example.com" && password === "123456") {
      alert("Login bem-sucedido!");
      router.push("/hugin"); // Redireciona para /hugin após login bem-sucedido
    } else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="cpf"
            variant="outlined"
            type="cpf"
            value={cpf}
            onChange={(e) => setcpf(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
