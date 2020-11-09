function selecionou() {
    var pais = document.getElementById('pais').value;

    if (pais == 'Brasil') {
        document.getElementById('escolha').innerHTML = "<img class='bg-escolha rounded mx-auto d-block' src='img/brasil.jpg'/>"
        document.getElementById('escolha').innerHTML += "<p id='nacionalidade'>Você é brasileiro!</p>"
    } else if (pais == 'Canada') {
        document.getElementById('escolha').innerHTML = "<img class='bg-escolha rounded mx-auto d-block' src='img/canada.jpg'/>"
        document.getElementById('escolha').innerHTML += "<p id='nacionalidade'>Você é canadense!</p>"
    } else if (pais == "EUA") {
        document.getElementById('escolha').innerHTML = "<img class='bg-escolha rounded mx-auto d-block' src='img/eua.jpg'/>"
        document.getElementById('escolha').innerHTML += "<p id='nacionalidade'>Você é americano!</p>"
    } else {
        document.getElementById('escolha').innerHTML = "<img class='bg-escolha rounded mx-auto d-block' src='img/aguardando.png'/>"
        document.getElementById('escolha').innerHTML += "<p id='nacionalidade'>Aguardando sua escolha...</p>"
    }
    
}