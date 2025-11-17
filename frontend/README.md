# Catálogo de Carros

Listagem de carros, onde ao clicar no card consigo ver detalhes e preencher um formulário de contato.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- Tailwind CSS 4.1.17
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Axios 1.12.2
- React Hook Form 7.63.0
- Zod 4.1.11

## Estrutura do Projeto

```
src/
├── assets/           # Recursos estáticos (estilos, imagens)
├── core/             # Componentes e utilitários compartilhados
│   ├── components/   # Componentes genéricos reutilizáveis
│   ├── lib/          # Configurações de bibliotecas
│   └── utils/        # Funções utilitárias
├── domain/           # Domínios de negócio (a serem implementados)
├── layouts/          # Layouts de página
├── pages/            # Páginas da aplicação
└── router/           # Configuração de rotas
```

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## Funcionalidades

- **Listagem de carros**: Exibição de todos os veículos disponíveis no catálogo
- **Visualização de detalhes**: Página com informações detalhadas do veículo
- **Formulário de contato**: Formulário para manifestar interesse no veículo

## Arquitetura

O projeto segue uma arquitetura modular baseada em domínios:

- **Core**: Componentes e lógica compartilhada
- **Domain**: Lógica de negócio organizada por domínio funcional
- **Pages**: Componentes de página que orquestram domínios
- **Layouts**: Estruturas de layout reutilizáveis

## API Integration

O frontend se comunica com o backend através de:

- **Public API** (`/api/v1/external`): Endpoints públicos
- **Authenticated API** (`/api/v1/internal`): Endpoints autenticados

Configuração em `src/core/lib/api.ts`