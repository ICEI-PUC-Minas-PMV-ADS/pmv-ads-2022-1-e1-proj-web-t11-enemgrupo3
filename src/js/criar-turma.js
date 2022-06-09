const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

function create() {
    //Se ele entrou aqui, é porque o form está válido!

    //Inicia a massa de dados (payload)
    let payload = {
        nomeTurma: document.querySelector("#nomeTurma").value,
        materia: document.querySelector("#materia").value,
        alunos: document.querySelector("#alunos").value,
        ambiente: document.querySelector("#ambiente").value,
        pontuacao: document.querySelector("#pontuacao").value
    };

    //Enviar para a API
    fetch(`https://62a252e7cd2e8da9b0068f57.mockapi.io/turma`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())

        .then(response => {
            alert('Cadastrado com sucesso');

            window.location.href = 'pagina-tutor.html';
        })
}
// Construir a massa de dados do payload
// Enviar os dados para a API e redirecionar para a listagem

window.onload = function () {
    setScreenTypeTexts();
    fillInputs();
}