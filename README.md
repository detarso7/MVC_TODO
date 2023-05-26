# MVC_TODO

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>README - Aplicativo TODO</title>
</head>
<body>
  <h1>Aplicativo TODO</h1>

  <p>Deploy feito utilizando os serviços gratuitos da Render e o banco de dados hospedado no Elephant</p>

  <h2>Funcionalidades</h2>
  <ul>
    <li>Adicionar tarefas à lista de TODOs</li>
    <li>Marcar tarefas como concluídas</li>
    <li>Remover tarefas da lista</li>
    <li>Visualizar a lista de TODOs</li>
  </ul>

  <h2>Tecnologias utilizadas</h2>
  <ul>
    <li>Front-end: HTML, CSS e JavaScript</li>
    <li>Back-end: Node.js com Express.js</li>
    <li>Banco de dados: PostgreSQL no ElephantSQL</li>
  </ul>

  <h2>Como executar localmente</h2>
  <ol>
    <li>Clone este repositório: <code>git clone &lt;URL do repositório&gt;</code></li>
    <li>Navegue até o diretório do projeto: <code>cd &lt;nome do diretório&gt;</code></li>
    <li>Instale as dependências: <code>npm install</code></li>
    <li>Configure o arquivo conn.js assim:</li>
    <ol type="a">
          const sequelize = new Sequelize('banco', 'usuario', 'senha', { 
              host: 'localhost',
              dialect: 'mysql'
          })
    </ol>
    <li>Inicie o servidor: <code>npm start</code></li>
    <li>Acesse o aplicativo no navegador: <code>http://localhost:3000</code></li>
  </ol>

  <h2>Deploy</h2>
  <p>O aplicativo foi implantado utilizando os serviços gratuitos da Render para hospedagem do front-end e back-end, e o banco de dados foi hospedado no ElephantSQL. O processo de deploy pode variar dependendo da plataforma ou serviço de hospedagem escolhido.</p>

  <h2>Contribuição</h2>
  <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests com melhorias, correções de bugs ou novas funcionalidades.</p>

  <h2>Licença</h2>
  <p>Este projeto está licenciado sob a <a href="https://opensource.org/licenses/MIT">Licença MIT</a>.</p>
</body>
</html>
