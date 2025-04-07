# 💳 HbiOdin - Teste Prático Frontend Júnior

Este projeto foi desenvolvido como parte do teste técnico para a vaga de **Desenvolvedor Frontend Júnior**, com foco em React/Next.js, consumo de API pública, componentização, responsividade e boas práticas de desenvolvimento.

![HbiOdin Demo](https://user-images.githubusercontent.com/seu-usuario/demo.png) <!-- Substitua por uma imagem do projeto (opcional) -->

---

## 🚀 Tecnologias Utilizadas

- ✅ [Next.js 13+](https://nextjs.org/)
- ✅ [TypeScript](https://www.typescriptlang.org/)
- ✅ [Material UI (MUI)](https://mui.com/)
- ✅ [React Hook Form](https://react-hook-form.com/)
- ✅ [Zod](https://zod.dev/)
- ✅ [Axios](https://axios-http.com/)

---

## 📁 Estrutura de Pastas

app/ 
├── components/ # Componentes reutilizáveis (navbar, ícones, inputs etc.) 
├──hugin > Consulta CNPJ
├──munin > Saldo e gerar transações
├──odin > Login
├──shared-theme
├──theme
├──uteis


---

## 🔐 Página de Login

- Inputs:
- CPF com validação de formato e cálculo
- Senha com requisitos mínimos
- Validação via `Zod` + `React Hook Form`
- Ao clicar em “Entrar”, o usuário é redirecionado para a página principal (sem autenticação real)

---

## 🏦 Página Principal

- Exibe:
  - Nome do usuário
  - Tema escuro/claro (alternável e persistente)
  - Saldo bancário (armazenado em `localStorage`)
  - Lista de transações (data, descrição, valor)
- Ações:
  - ✅ Adicionar saldo
  - ✅ Gerar nova transação fictícia

---

## 🏢 Consulta de Empresa por CNPJ

- Utiliza API pública da ReceitaWS:  
  `https://www.receitaws.com.br/v1/cnpj/{cnpj}`
- Ao consultar:
- Exibe razão social, endereço completo, e-mail e telefone
- Lista de sócios e seus cargos
- Mensagem de erro caso CNPJ inválido ou resposta mal sucedida
- Tem que pedir servidor temporário

---

## ✨ Diferenciais Implementados

| Funcionalidade                        | Status |
|--------------------------------------|--------|
| Estilização com MUI                  | ✅     |
| Tema claro/escuro                    | ✅     |
| Componentização                      | ✅     |
| Responsividade                       | ✅     |
| Validação de formulário              | ✅     |
| Uso de React Hook Form + Zod         | ✅     |
| Chamadas via Axios                   | ✅     |
| Tratamento de erro na consulta CNPJ  | ✅     |

---

## 🛠️ Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/hbiodin.git
cd hbiodin

# Instale as dependências
npm install

# Inicie o servidor
npm run dev

