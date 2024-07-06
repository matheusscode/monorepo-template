# Monorepo Template

Este repositório serve como um template para projetos monorepo, integrando várias tecnologias modernas para um desenvolvimento eficiente e escalável.

## Tecnologias Integradas

- **Next.js**: Framework React para construção de aplicações web com renderização no lado do servidor.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e eficiente.
- **Node.js com SWC**: Ambiente de execução JavaScript com o compilador super rápido SWC.
- **Fastify**: Framework web para Node.js focado em desempenho e baixo overhead.
- **Prisma**: ORM de próxima geração para consultas eficientes em banco de dados.
- **Docker Compose**: Ferramenta para definir e gerenciar ambientes multi-containers com suporte ao PostgreSQL.

## Recursos

- **Estrutura Monorepo**: Organização centralizada para gerenciar múltiplos pacotes e serviços.
- **Configuração Docker**: Facilita a configuração e execução de ambientes de desenvolvimento consistentes usando containers.
- **Suporte a PostgreSQL**: Banco de dados relacional robusto e escalável integrado via Docker Compose.

## Como Usar

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/monorepo-template.git
    ```

2. Navegue até o diretório do projeto e instale as dependências:
    ```bash
    cd monorepo-template
    npm install
    ```

3. Execute os containers Docker:
    ```bash
    docker-compose up
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
