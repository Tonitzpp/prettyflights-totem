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

## 3. Feature: qr-code-reader

Branch criada a partir de `develop`.
Desenvolvidos os módulos de leitura de QR code e validação de reserva.
Integrada na `develop` via Pull Request.

Commits realizados:
- `feat(check-in): implementar módulo de leitura de QR code`
- `feat(check-in): adicionar validação de reserva e janela de check-in`