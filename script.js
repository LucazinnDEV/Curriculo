
function escreverNome() {
    const nome = "Lucas Samuel";
    const elemento = document.getElementById("nome");
    let i = 0;

    const intervalo = setInterval(() => {
        if (i < nome.length) {
            elemento.textContent += nome.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 200);
}

window.onload = escreverNome;
