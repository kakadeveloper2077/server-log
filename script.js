// função responsável por monitorar toda e qualquer alteração que for detectado.
function capture() {

    // mecanismo de clock, com intervalo de tempo, contagem do tempo.
    let s = 0;
    let m = 0;
    let h = 0;
    let interval = setInterval(clock, 1000);
    function clock() {

        s++
        if (s == 60) {
            s = 0;
            m++;
        } if (m == 60) {
            m = 0;
            h++;
        } if (h == 24) {
            h = 0
        }
       
        // o uso do fetch e do response, para pegar dados do server, como no caso código de status.
        fetch('/').then(response => {
            // variáveis como status de resposta e o valor que vem do input la na UI.
            const connection_status = response.status;
            let status_code = Number(window.document.getElementById('statuscode').value);

            // tratamento da informação mediante a comparação do código adquirido do backend e o que vem do frontend.
            if (status_code === connection_status) {
                document.getElementById('server_info').value = 'Server connection | [ok.]' + ' | ' +' [' + h + ':' + m + ':' + s + ']' + '\n' + document.getElementById('server_info').value;
            } else if (status_code === 502 || connection_status === 404) {
                return document.getElementById('server_info').value = 'Server connection | [Internal server error.]' + ' | ' + ' [' + h + ':' + m + ':' + s + ']' + '\n' + document.getElementById('server_info').value;
            } else {
                return document.getElementById('server_info').value = 'Server connection | [out of range.]' + ' | ' +' [' + h + ':' + m + ':' + s + ']' + '\n' + document.getElementById('server_info').value;
            }
        })
    }
}

// função de atualiza o servidor, basicamente substitui o F5 do teclado.
function refresh() {
    return window.location.reload();
}

// função de copiar os dados, pega tudo que foi exibido la na textarea, e transfere pra outro lugar.
function copy() {
    let server_info = window.document.getElementById("server_info");
    server_info.select();
    document.execCommand("Copy");
    return alert('Dados enviados para área de transferência.');
}