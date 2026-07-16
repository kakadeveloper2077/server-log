SOBRE O SERVER LOG: <br><br>
⚡ Como o Sistema Funciona<br>
🧠 Backend<br><br>

O backend utiliza o módulo nativo http do Node.js para criar o servidor.<br><br>

O servidor:<br><br>

🟢 escuta a porta 8080<br>
📨 responde requisições HTTP<br>
📂 entrega os arquivos da aplicação<br>
🧾 define os tipos de conteúdo enviados ao navegador<br>
📌 Rotas utilizadas:<br>
Rota	Função<br>
/	retorna o arquivo HTML<br>
/ style.css	retorna o CSS<br>
/ script.js	retorna o JavaScript<br>
🖥️ Frontend<br><br>

A interface possui:<br><br>

📋 um painel de logs (textarea)<br>
🔢 um campo para inserir códigos HTTP<br>
🎛️ botões de captura, atualização e cópia<br>
🔍 Funcionamento da Captura<br><br>

Quando o botão Iniciar captura em tempo real é acionado:<br><br>

⏳ Um temporizador é iniciado usando setInterval<br>
🌐 O sistema realiza requisições automáticas usando fetch('/')<br>
📥 O código de status retornado pelo servidor é comparado com o código inserido pelo usuário<br>
📝 O resultado da verificação é exibido no painel de logs<br>
📜 Sistema de Logs<br><br>

Os logs exibem:<br><br>

📡 status da conexão<br>
🕒 horário da verificação<br>
✅ resultado da resposta do servidor<br>
💡 Exemplo:<br>
Server connection | [ok.] | [0:0:15]<br>
⚙️ Funções do Sistema<br>
📡 capture()<br><br>

Responsável pelo monitoramento automático do servidor.<br><br>

Funções:<br>
▶️ inicia o temporizador<br>
🌐 realiza requisições HTTP<br>
📶 captura códigos de status<br>
🖥️ atualiza o painel de logs<br>
🔄 refresh()<br><br>

Atualiza a página manualmente utilizando:<br>

window.location.reload()<br>
📋 copy()<br><br>

Copia os dados exibidos no painel de logs para a área de transferência.<br><br>

🚀 Como Executar o Projeto<br>
1️⃣ Clone o repositório<br>
git clone https://github.com/kakadeveloper2077/server-log.git<br>
2️⃣ Acesse a pasta<br>
cd seu-repositorio<br>
3️⃣ Execute o servidor<br>
node server.js<br>
4️⃣ Abra o navegador<br>
http://localhost:8080<br>
🎓 Objetivos de Aprendizado<br><br>

Esse projeto foi desenvolvido com foco em:<br>

🌐 entendimento de HTTP<br>
🧠 arquitetura cliente-servidor<br>
⚙️ funcionamento básico do Node.js<br>
🔗 integração frontend/backend<br>
📡 monitoramento de respostas HTTP<br>
🖥️ manipulação de interface via JavaScript<br>
🚧 Melhorias Futuras<br>
🚀 utilização de Express.js<br>
💾 sistema de logs persistentes<br>
⚡ WebSocket para atualização em tempo real<br>
📱 painel responsivo<br>
🔐 autenticação<br>
🌍 monitoramento de múltiplas rotas<br>
🧩 modularização do backend<br>
⏳ uso de async/await<br>
🛡️ tratamento avançado de erros<br><br>
