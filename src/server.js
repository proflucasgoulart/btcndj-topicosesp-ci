const app = require('./app');

app.listen(process.env.PORT || 5678, () => {
  console.log('Bootcamp desenvolvedor back end - Tópicos especiais. Aplicação de exemplo ouvindo na porta 5678!');
});
