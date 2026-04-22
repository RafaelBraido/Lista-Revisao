const palavra = "paralelepipudo";
let repA = 0;

for (let i = 0; i < palavra.length; i++) {
    const letra = palavra[i].toLowerCase();

    if (letra ===  "a"&& letra === "e" && letra === "i" && letra === "o" && letra === "u") {
        repA++;
    }
}

console.log(repA);