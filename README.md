# API de Alunos

API simples para gerenciar alunos e suas médias em matemática.

## Instalação

```bash
npm install
```

## Como rodar

```bash
node server.js
```

O servidor vai rodar na porta 3000.

## Rotas

### Listar todos os alunos
```
GET http://localhost:3000/alunos
```

### Buscar aluno por ID
```
GET http://localhost:3000/alunos/1
```

### Buscar aluno por nome
```
GET http://localhost:3000/alunos/Ana
```

## Exemplo de resposta

```json
{
  "id": 1,
  "nome": "Ana",
  "media": 8.5
}
```
