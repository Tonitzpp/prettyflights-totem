# GitFlow — Diretrizes PrettyFlights Totem de Check-in

## 1. Inicialização do repositório
Repositório criado no GitHub como público.
Branch padrão `main` definida na criação do repositório.
Branch `develop` criada a partir de `main` como ponto de integração contínua.

## 2. Estrutura de branches

### Branches permanentes

| Branch    | Finalidade                                          |
|-----------|-----------------------------------------------------|
| `main`    | Código em produção. Cada merge aqui gera uma tag.   |
| `develop` | Integração contínua. Todas as features passam aqui. |

### Branches temporárias

| Tipo        | Padrão de nome        | Origem  | Destino        |
|-------------|-----------------------|---------|----------------|
| `feature/*` | `feature/<descricao>` | develop | develop        |
| `release/*` | `release/<versao>`    | develop | main + develop |
| `hotfix/*`  | `hotfix/<versao>`     | main    | main + develop |