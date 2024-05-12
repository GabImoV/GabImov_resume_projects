function calcularProrata() {
    var valorTotal = parseFloat(document.getElementById('valorTotal').value);
    var quantidadeDias = parseFloat(document.getElementById('quantidadeDias').value);
    var valorMulta = parseFloat(document.getElementById('valorMulta').value);

    var resultado = ((valorTotal / 30) * quantidadeDias) + valorMulta;

    document.getElementById('resultado').value = resultado.toFixed(2);
}
