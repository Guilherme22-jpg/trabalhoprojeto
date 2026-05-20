## 📁 Estrutura do Projeto
```
app/
├── page.tsx                          # Landing page
├── layout.tsx                        # Root layout com Toaster
├── globals.css                       # Estilos globais
├── componentes/
│   ├── header.tsx                    # Header com navegação
│   ├── footer.tsx                    # Footer
│   ├── nav.tsx                       # Navegação com active state
│   ├── toaster.tsx                   # Provider Sonner
│   └── ui/                           # Componentes shadcn/ui
│       ├── button.tsx
│       ├── input.tsx
│       └── textarea.tsx
└── sistema/paginas/
    └── curriculos/
        ├── page.tsx                  # Lista com busca em tempo real
        ├── data.ts                   # Mock data + localStorage
        ├── [id]/
        │   └── page.tsx              # Detalhes dinâmicos
        └── novo/
            └── page.tsx              # Formulário de cadastro
```

## 🚀 Como Começar

### Instalação

```bash
# Clonar repositório
git clone <url-do-repositorio>
cd trabalho

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build

```bash
npm run build
npm start
```

