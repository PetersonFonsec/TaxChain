// Função para gerar o relatório
export function generateReport(trades) {
  const totalTrades = trades.length;

  // 2. Moedas movimentadas
  const moedasMovimentadas = [
    ...new Set(trades.map((t) => t.executedCurrency)),
  ];

  // 3. Volume de dinheiro movimentado
  const volumeMovimentado = trades.reduce((acc, trade) => {
    if (!acc[trade.amountCurrency]) acc[trade.amountCurrency] = 0;
    acc[trade.amountCurrency] += trade.amountValue;
    return acc;
  }, {});

  // 4. Lucro ou prejuízo
  const operacoes = trades.reduce((acc, trade) => {
    if (!acc[trade.pair]) acc[trade.pair] = { compras: 0, vendas: 0 };
    if (trade.side === "BUY") {
      acc[trade.pair].compras += trade.operationValue;
    } else {
      acc[trade.pair].vendas += trade.operationValue;
    }
    return acc;
  }, {});

  const resultadoPorPar = Object.keys(operacoes).reduce((acc, pair) => {
    acc[pair] = operacoes[pair].vendas - operacoes[pair].compras;
    return acc;
  }, {});

  const lucroPrejuizoTotal = Object.values(resultadoPorPar).reduce(
    (acc, val) => acc + val,
    0
  );

  // 5. Moedas que mais deram lucro e prejuízo
  const moedaMaiorLucro = Object.keys(resultadoPorPar).reduce((a, b) =>
    resultadoPorPar[a] > resultadoPorPar[b] ? a : b
  );
  const maiorLucro = resultadoPorPar[moedaMaiorLucro];

  const moedaMaiorPrejuizo = Object.keys(resultadoPorPar).reduce((a, b) =>
    resultadoPorPar[a] < resultadoPorPar[b] ? a : b
  );
  const maiorPrejuizo = resultadoPorPar[moedaMaiorPrejuizo];

  // 6. Quantidade de taxa paga
  const taxasTotais = trades.reduce((acc, trade) => {
    if (!acc[trade.feeCurrency]) acc[trade.feeCurrency] = 0;
    acc[trade.feeCurrency] += trade.feeValue;
    return acc;
  }, {});

  // Relatório final
  return {
    totalTrades,
    moedasMovimentadas,
    volumeMovimentado,
    lucroPrejuizoTotal,
    moedaMaiorLucro,
    maiorLucro,
    moedaMaiorPrejuizo,
    maiorPrejuizo,
    taxasTotais,
  };
}

export function generateTrade(row) {
  // Extrair dados relevantes
  const executedAmount = parseFloat(row.Executed.match(/[\d.]+/)[0]);
  const executedCurrency = row.Executed.match(/[A-Za-z]+/)[0];
  const amountValue = parseFloat(row.Amount.match(/[\d.]+/)[0]);
  const amountCurrency = row.Amount.match(/[A-Za-z]+/)[0];
  const feeValue = parseFloat(row.Fee.match(/[\d.]+/)[0]);
  const feeCurrency = row.Fee.match(/[A-Za-z]+/)[0];
  const price = parseFloat(row.Price);
  const operationValue = executedAmount * price;

  return {
    pair: row.Pair,
    side: row.Side,
    executedAmount,
    executedCurrency,
    amountValue,
    amountCurrency,
    feeValue,
    feeCurrency,
    price,
    operationValue,
  };
}
