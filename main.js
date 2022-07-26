var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function processaEntrada(textoDeEntrada) {
    // Escreva a sua solução aqui
    let arrayTextoDeEntrada = textoDeEntrada.split(" ");
    let resposta = "";
    let contadorDuplicada = 0;

    arrayTextoDeEntrada.forEach((arrayTexto) => {
        const palavras = arrayTexto
        let silabas = [];

        for (let x = 0; x < palavras.length; x++) {
            silabas.push(palavras.substring(palavras.length, x));
        };

        for (let y = 0; y < silabas.length; y++) {

            if (palavras.split(silabas[y]).length - 1 == 2) {

                duplicada = true;
                let contadorSubstring = palavras.length - silabas[y].length;

                let palavraFinal = palavras.substring(0, contadorSubstring);
                if (resposta === "") {
                    resposta = palavraFinal;
                } else {
                    resposta += " " + palavraFinal;
                }
                break;
            } else {
                duplicada = false;
            };
        };
        if (duplicada) {
            contadorDuplicada++;
        };

    });

    if (contadorDuplicada === arrayTextoDeEntrada.length) {
        resposta = resposta + ".";
    } else {
        resposta = textoDeEntrada + ".";
    };

    console.log(resposta)
    return resposta
}
rl.on('line', processaEntrada)

// TEST CASES
console.assert(processaEntrada('banana') == 'bana.')
console.assert(processaEntrada('oo ratoato roeuoeu aa roupaoupa dodo reiei dee romaoma') == 'o rato roeu a roupa do rei de roma.')
console.assert(processaEntrada('a bananeira tem banana') == 'a bananeira tem banana.')
