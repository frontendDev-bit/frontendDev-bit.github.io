const RATES = {
    usd: 1,
    eur: 0.85,
    rub: 80.12,
    gbp: 0.74,
    jpy: 149.07,
    chf: 0.81,
    cny: 7.16,
    cad: 1.36,
    sek: 9.50,
    nok: 10.12,
    pln: 3.61,
    czk: 21.04,
    zar: 17.75,
    try: 39.81,
    kwd: 0.2996,
    sar: 3.75
};

function convert ({inputSum, inputCurrency, outputCurrency}) {

    number = inputSum * (RATES[outputCurrency] / RATES[inputCurrency]);
    result = Number(number.toFixed(4));
    return result
}