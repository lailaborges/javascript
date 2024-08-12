function caracteres(palavra) {
    tamanho = palavra.length;
    if (tamanho < 20) {
        console.log("O limite de carcteres ainda não foi excedido.");
    } else if (tamanho > 20) {
        console.log("O limite de carcteres foi excedido.");
    } else {
        console.log("Você atingiu o limite de caracteres.");
    }
}

caracteres("paralelepipedo1234567");