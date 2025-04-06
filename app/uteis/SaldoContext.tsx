'use client';
import React, { createContext, useContext, useState } from 'react';

type Transacao = {
  data: string;
  descricao: string;
  valor: number;
};

type SaldoContextType = {
  saldo: number;
  transacoes: Transacao[];
  adicionarSaldo: (valor: number) => void;
  gerarTransacaoAleatoria: () => void;
};

const SaldoContext = createContext<SaldoContextType | undefined>(undefined);

export const SaldoProvider = ({ children }: { children: React.ReactNode }) => {
  const [saldo, setSaldo] = useState(0);
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  const adicionarSaldo = (valor: number) => {
    setSaldo((prev) => prev + valor);
    const novaTransacao: Transacao = {
      data: new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      descricao: 'Adição manual de saldo',
      valor,
    };
    setTransacoes((prev) => [...prev, novaTransacao]);
  };
  
  const gerarTransacaoAleatoria = () => {
    const valorAleatorio = Math.floor(Math.random() * 1000);
    setSaldo((prev) => prev + valorAleatorio);
  
    const novaTransacao: Transacao = {
      data: new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      descricao: 'Transação aleatória',
      valor: valorAleatorio,
    };
  
    setTransacoes((prev) => [...prev, novaTransacao]);
  };

  return (
    <SaldoContext.Provider value={{ saldo, transacoes, adicionarSaldo, gerarTransacaoAleatoria }}>
      {children}
    </SaldoContext.Provider>
  );
};

export const useSaldo = () => {
  const context = useContext(SaldoContext);
  if (!context) {
    throw new Error('useSaldo deve ser usado dentro de um SaldoProvider');
  }
  return context;
};
