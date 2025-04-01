"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function huginPage() {
  const router = useRouter();

  const handleGoTohugin = () => {
    router.push("/hugin"); // Redireciona para /hugin
  };

  return (
    <div>
      <h1>Bem-vindo à página munin!</h1>
      <Button variant="contained" color="primary" onClick={handleGoTohugin}>
        Ir para hugin
      </Button>
    </div>
  );
}
