function calcularProrata() {
    var valorTotal = parseFloat(document.getElementById('valorTotal').value.replace(",", "."));
    var quantidadeDias = parseFloat(document.getElementById('quantidadeDias').value.replace(",", "."));
    var valorMulta = parseFloat(document.getElementById('valorMulta').value.replace(",", "."));

    var resultado = ((valorTotal / 30) * quantidadeDias) + valorMulta;

    document.getElementById('resultado').innerText = "Resultado: R$ " + resultado.toLocaleString('pt-BR', {minimumFractionDigits: 2});
}
