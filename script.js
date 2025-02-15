const div = window.document.getElementById("div_main");
let intervalId;
let isRunning = false;

//função para gerar cor aleatória
function gerarCorAleatoria(){
    const letras = "0123456789abcdef";
    let cor = "#";
    for (let i =0; i <6; i++){
        cor += letras[Math.floor(Math.random() * 16)];
        //Math.random(): escolhe aleatóriamente um número entre 0 e 16 (já que é multiplicado por 16)
        //Math.floor() : arredonda o número para baixo retornando o maior inteiro menor ou igual ao número.
    };
    return cor;
 }

div.addEventListener("click", () => {
         if (isRunning) {
            clearInterval(intervalId);
            isRunning = false;
         } else {
            intervalId = setInterval(() => {
            div.style.background = gerarCorAleatoria();
            }, 1000);
            isRunning = true;
         }
     });

