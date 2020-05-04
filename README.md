# teste_smarkio

Projeto criado para de salvar comentários no MySQL, e através da API da IBM watson transformar texto em audio.

# MySQL connection
dados da conexão está no arquivo connection.js

##### Table (nome = comentarios )

| nome     | tipo       | not null|              |
| ---------| ---------- |---------|--------------|
|  id      |  int       |  true   |auto_increment|
|comentario|  char(200) |  true   |              |

# Para executar
  - abrir o prompt 
  - navegar até o diretório do projeto
  - digitar o comando nodemon (caso ja tenha instalado) ou npm start
  - abrir o browser http://localhost:3000/
