SOBRE O SERVER LOG: 
⚡ Como o Sistema Funciona
🧠 Backend

O backend utiliza o módulo nativo http do Node.js para criar o servidor.

O servidor:

🟢 escuta a porta 8080
📨 responde requisições HTTP
📂 entrega os arquivos da aplicação
🧾 define os tipos de conteúdo enviados ao navegador
📌 Rotas utilizadas
Rota	Função
/	retorna o arquivo HTML
/style.css	retorna o CSS
/script.js	retorna o JavaScript
🖥️ Frontend

A interface possui:

📋 um painel de logs (textarea)
🔢 um campo para inserir códigos HTTP
🎛️ botões de captura, atualização e cópia
🔍 Funcionamento da Captura

Quando o botão Iniciar captura em tempo real é acionado:

⏳ Um temporizador é iniciado usando setInterval
🌐 O sistema realiza requisições automáticas usando fetch('/')
📥 O código de status retornado pelo servidor é comparado com o código inserido pelo usuário
📝 O resultado da verificação é exibido no painel de logs
📜 Sistema de Logs

Os logs exibem:

📡 status da conexão
🕒 horário da verificação
✅ resultado da resposta do servidor
💡 Exemplo:
Server connection | [ok.] | [0:0:15]
⚙️ Funções do Sistema
📡 capture()

Responsável pelo monitoramento automático do servidor.

Funções:
▶️ inicia o temporizador
🌐 realiza requisições HTTP
📶 captura códigos de status
🖥️ atualiza o painel de logs
🔄 refresh()

Atualiza a página manualmente utilizando:

window.location.reload()
📋 copy()

Copia os dados exibidos no painel de logs para a área de transferência.

🚀 Como Executar o Projeto
1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
2️⃣ Acesse a pasta
cd seu-repositorio
3️⃣ Execute o servidor
node server.js
4️⃣ Abra o navegador
http://localhost:8080
🎓 Objetivos de Aprendizado

Esse projeto foi desenvolvido com foco em:

🌐 entendimento de HTTP
🧠 arquitetura cliente-servidor
⚙️ funcionamento básico do Node.js
🔗 integração frontend/backend
📡 monitoramento de respostas HTTP
🖥️ manipulação de interface via JavaScript
🚧 Melhorias Futuras
🚀 utilização de Express.js
💾 sistema de logs persistentes
⚡ WebSocket para atualização em tempo real
📱 painel responsivo
🔐 autenticação
🌍 monitoramento de múltiplas rotas
🧩 modularização do backend
⏳ uso de async/await
🛡️ tratamento avançado de erros
👨‍💻 Autor

Desenvolvido para estudos e prática de backend utilizando Node.js puro.
