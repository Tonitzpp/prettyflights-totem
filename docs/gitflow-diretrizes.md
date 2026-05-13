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

## 4. Release 1.0.0

Branch criada a partir de `develop`.
Apenas bump de versão e bugfixes são permitidos nesta branch.
Semantic Versioning: MAJOR=1, MINOR=0, PATCH=0 — primeira versão pública.
Após merge na `main`, tag `v1.0.0` criada.

## 5. Hotfix 1.0.1

Branch criada a partir de `main` para corrigir bug crítico em produção (HOT-042).
Bug: crash ao receber QR code em branco ou nulo.
Correção: adicionada verificação defensiva no método `decode()`.
Integrada na `main` (tag v1.0.1) e na `develop` via Pull Request.
PATCH incrementado: v1.0.0 → v1.0.1.

## 6. Convenções adotadas

### Conventional Commits
Formato: `<tipo>(<escopo>): <descrição>`

| Tipo      | Uso                              |
|-----------|----------------------------------|
| `feat`    | Nova funcionalidade              |
| `fix`     | Correção de bug                  |
| `docs`    | Documentação                     |
| `chore`   | Manutenção (versão, config)      |
| `merge`   | Commits de merge                 |
| `release` | Merge de release na main         |
| `hotfix`  | Merge de hotfix na main          |

### Semantic Versioning — `MAJOR.MINOR.PATCH`

| Campo   | Quando incrementar                        |
|---------|-------------------------------------------|
| `MAJOR` | Mudança incompatível com versão anterior  |
| `MINOR` | Nova funcionalidade retrocompatível       |
| `PATCH` | Correção de bug retrocompatível           |

### Histórico de versões
- `v1.0.0` — Release inicial: check-in por QR code
- `v1.0.1` — Hotfix HOT-042: crash em QR code em branco