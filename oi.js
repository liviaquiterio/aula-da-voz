function coracaoMae () {
    alert ("Esse algoritmo calcula quantas vezes seu coração bateu até o ano de 2024.")
    var ano = prompt("Qual é o ano que você nasceu?")
    var i = 2024 - ano;
    var meses = i * 12;
    var dias = meses * 30;
    var horas = dias * 24;
    var minutos = horas * 60;
    var bpm = minutos * 70;
    alert ("Seu coração bateu " + bpm);
}

coracaoMae ()

// Ouço vozes...

function lerTexto () {
var mensagem = new SpeechSynthesisUtterance ();
var vozes = speechSynthesis.getVoices();
mensagem.text = "Acorda, Nicoli!";
mensagem.voice = vozes[1];
speechSynthesis.speak(mensagem);
}
lerTexto ()