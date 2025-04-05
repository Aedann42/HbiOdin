import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

const frases = [
  "Se eu não comprar nada, o desconto é maior",
  "Tire esse relógio da tomada, garoto. Você não consegue ver a hora enquanto dorme! São 2 centavos a hora!",
  "Uma corrente de ouro só serve para prender o seu portão de ouro na sua casa de ouro",
  "São 30 centavos de aveia!"
];

export default function CardAlert() {
  const [frase, setFrase] = React.useState('');

  React.useEffect(() => {
    const index = Math.floor(Math.random() * frases.length);
    setFrase(frases[index]);
  }, []);

  return (
    <Card variant="outlined" sx={{ m: 1.5, flexShrink: 0 }}>
      <CardContent>
        <AutoAwesomeRoundedIcon fontSize="small" />
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          {frase}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          Frases motivacionais do Julious
        </Typography>
      </CardContent>
    </Card>
  );
}
