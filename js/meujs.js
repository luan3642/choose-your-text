function uper() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let joga = document.getElementById("joga")
        caixa.value = texto.toUpperCase()
    }

}

function lower() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let joga = document.getElementById("joga")
        caixa.value = texto.toLowerCase()
    }

}

function camelCase() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let camel = texto.substr(0, 1).toUpperCase()
        let nome = texto.substr(1)
        let junta = camel + nome
        caixa.value = junta
    }
}

function deleteSpace() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let separa = texto.split(" ")
        let junta = separa.join("")
        caixa.value = junta
    }
}

function underline() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let separa = texto.split(" ")
        let junta = separa.join("_")
        caixa.value = junta
    }
}

// faca um for step a cada 1 interacao deixa em UPER CASE
/*
function removeEspaco(array) {

    var filterArray = array.filter(function (valor) {
        return Boolean(valor);
    });

    return filterArray;
}
*/


function alternUpperAndLower() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    let textoFinal = []
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let juntaTexto = texto.split(" ")
        let arrumaTexto = juntaTexto.join("")
        for (let i = 0; i < arrumaTexto.length; i += 2) {
            for (let j = 1; j < arrumaTexto.length; j += 2) {
                textoFinal[i] = arrumaTexto[i].toUpperCase()
                textoFinal[j] = arrumaTexto[j].toLowerCase()
            }
        }
        const valor = textoFinal.join("");
        caixa.value = valor
        
    }
}

function deleteWorlds() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    let textoFinal = []
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        for(let elemento in texto){
            if(elemento < 3){
                caixa.value = "";
            } else{
                caixa.value = texto;
            }
        }
        
    }
}