const express = require('express');
const app = express();
const PORT = 3000;

const alunos = [
  { id: 1, nome: 'Ana', media: 8.5 },
  { id: 2, nome: 'Bruno', media: 7.2 },
  { id: 3, nome: 'Carla', media: 9.1 },
  { id: 4, nome: 'Diego', media: 6.8 },
  { id: 5, nome: 'Eduarda', media: 7.9 }
];

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.get('/alunos/:busca', (req, res) => {
  const busca = req.params.busca;
  let aluno;
  if (!isNaN(busca)) {

    aluno = alunos.find(a => a.id === parseInt(busca));
  } else {

    aluno = alunos.find(a => a.nome.toLowerCase() === busca.toLowerCase());
  }
  if (!aluno) {
    return res.status(404).json({ erro: 'Aluno não encontrado' });
  }
  res.json(aluno);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
