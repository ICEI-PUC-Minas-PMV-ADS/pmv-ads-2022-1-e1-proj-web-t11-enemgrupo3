const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

function create() {
    //Se ele entrou aqui, é porque o form está válido!

    //Inicia a massa de dados (payload)
    let payload = {
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        senha: document.querySelector("#senha").value
    };

    //Enviar para a API
    fetch(`https://62a252e7cd2e8da9b0068f57.mockapi.io/aluno`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())

        .then(response => {
            alert('Cadastrado com sucesso');

            window.location.href = 'home.html';
        })
}
// Construir a massa de dados do payload
// Enviar os dados para a API e redirecionar para a listagem

window.onload = function () {
    setScreenTypeTexts();
    fillInputs();
}