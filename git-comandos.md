# Git Commands — Referência Técnica

> 20 comandos Git agrupados por categoria, com explicação e exemplos de uso.

---

## 1. Configuração e Inicialização

### `git init`
Inicializa um novo repositório Git no diretório atual.

```bash
# Exemplo 1
git init

# Exemplo 2
git init --initial-branch=main
```

---

### `git config`
Define configurações do Git como nome e e-mail do usuário.

```bash
# Exemplo 1
git config --global user.name "Seu Nome"

# Exemplo 2
git config --list
```

---

### `git clone`
Copia um repositório remoto para a máquina local.

```bash
# Exemplo 1
git clone https://github.com/org/projeto.git

# Exemplo 2
git clone https://github.com/org/projeto.git minha-pasta
```

---

## 2. Stage e Commit

### `git add`
Adiciona arquivos ao stage para o próximo commit.

```bash
# Exemplo 1
git add src/CheckIn.js

# Exemplo 2
git add .
```

---

### `git commit`
Registra as alterações do stage no histórico do repositório.

```bash
# Exemplo 1
git commit -m "feat(check-in): adicionar leitura de QR code"

# Exemplo 2
git commit -am "fix(ui): corrigir botão de confirmação"
```

---

### `git status`
Mostra o estado atual dos arquivos no repositório.

```bash
# Exemplo 1
git status

# Exemplo 2
git status -s
```

---

### `git diff`
Mostra as diferenças entre versões de arquivos.

```bash
# Exemplo 1
git diff

# Exemplo 2
git diff abc1234 def5678
```

---

## 3. Branches

### `git branch`
Lista, cria ou deleta branches.

```bash
# Exemplo 1
git branch -a

# Exemplo 2
git branch -d feature/qr-code-reader
```

---

### `git switch`
Alterna entre branches ou cria uma nova.

```bash
# Exemplo 1
git switch develop

# Exemplo 2
git switch -c feature/nova-funcionalidade
```

---

### `git checkout`
Alterna branches ou restaura arquivos do histórico.

```bash
# Exemplo 1
git checkout -b feature/impressao-boarding-pass

# Exemplo 2
git checkout -- src/BoardingPass.js
```

---

## 4. Integração de Branches

### `git merge`
Integra o histórico de uma branch em outra.

```bash
# Exemplo 1
git merge --no-ff feature/qr-code-reader -m "merge: integrar leitura de QR code"

# Exemplo 2
git merge hotfix/1.0.1
```

---

### `git rebase`
Reaplica commits de uma branch sobre outra, linearizando o histórico.

```bash
# Exemplo 1
git rebase develop

# Exemplo 2
git rebase -i HEAD~3
```

---

### `git cherry-pick`
Aplica um commit específico de outra branch na branch atual.

```bash
# Exemplo 1
git cherry-pick a3f92bc

# Exemplo 2
git cherry-pick a3f92bc d84e1aa
```

---

## 5. Repositórios Remotos

### `git remote`
Gerencia conexões com repositórios remotos.

```bash
# Exemplo 1
git remote add origin https://github.com/org/projeto.git

# Exemplo 2
git remote -v
```

---

### `git push`
Envia commits locais para o repositório remoto.

```bash
# Exemplo 1
git push -u origin develop

# Exemplo 2
git push origin v1.0.0
```

---

### `git pull`
Busca e integra mudanças do repositório remoto.

```bash
# Exemplo 1
git pull origin develop

# Exemplo 2
git pull --rebase origin develop
```

---

### `git fetch`
Baixa atualizações do remoto sem integrar automaticamente.

```bash
# Exemplo 1
git fetch origin

# Exemplo 2
git fetch origin release/1.0.0
```

---

## 6. Tags e Histórico

### `git tag`
Marca pontos específicos do histórico, geralmente releases.

```bash
# Exemplo 1
git tag -a v1.0.0 -m "release: versão 1.0.0 do Totem de Check-in"

# Exemplo 2
git tag -l
```

---

### `git log`
Exibe o histórico de commits do repositório.

```bash
# Exemplo 1
git log --oneline --graph --all

# Exemplo 2
git log --author="Seu Nome"
```

---

### `git stash`
Salva temporariamente alterações não commitadas.

```bash
# Exemplo 1
git stash push -m "wip: validação de passaporte em andamento"

# Exemplo 2
git stash pop
```