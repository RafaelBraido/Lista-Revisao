const palavra = "paralelepipedo";
let repA = 0;

for (let i = 0; i < palavra.length; i++) {
    const letra = palavra[i].toLowerCase();

    if (letra ===  "a") {
        repA++;
    }
}

console.log(repA);