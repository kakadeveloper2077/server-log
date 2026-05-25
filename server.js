// requesitos pro server funcionar, como o uso do http, o fs, pra acessar arquivos da máquina local, e o path pra definir o caminho até esses arquivos.
const http = require ('http');
const fs = require ('fs');
const path = require ('path');

// SERVER

// aqui a função create server do http, cria um servidor, com parâmetros de requisições e respostas, e nele, contem, requisições pra cada arquivo do sistema, acessando diferentes rotas, mas a raiz como '/', acaba acessando resto, oque devolve pro navegador e ele junta tudo. 
http.createServer(function(req,res){
    if (req.url === '/'){
        const html = fs.readFileSync(
            path.join(__dirname, 'index.html')
        )
        res.setHeader('Content-type', 'text/html')
        res.end(html)
    }

    if (req.url === '/style.css'){
        const css = fs.readFileSync(
            path.join(__dirname, 'style.css')
        )
        res.setHeader('Content-type', 'text/css')
        res.end(css)
    }

    if (req.url === '/script.js'){
        const javascript = fs.readFileSync(
            path.join(__dirname, 'script.js')
        )
        res.setHeader('Content-type', 'application/javascript')
        res.end(javascript)
    }
    // aqui a definição da porta de escuta que o servidor vai usar pra ficar online na internet.
}).listen(8080);
console.log('Servidor Online.');