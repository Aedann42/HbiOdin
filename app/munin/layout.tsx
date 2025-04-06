// ✅ app/munin/layout.tsx
import { SaldoProvider } from '../uteis/SaldoContext';
import React from 'react';

export default function MuninLayout({ children }: { children: React.ReactNode }) {
  return <SaldoProvider>{children}</SaldoProvider>;
}
