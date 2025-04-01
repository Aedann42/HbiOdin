"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function huginPage() {
  const router = useRouter();

  const handleGoToMunin = () => {
    router.push("/munin"); // Redireciona para /munin
  };

  return (
    <div>
      <h1>Bem-vindo à página hugin!</h1>
      <Button variant="contained" color="primary" onClick={handleGoToMunin}>
        Ir para Munin
      </Button>
    </div>
  );
}
