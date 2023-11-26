//UNIDADES DISPONIVEIS
// mpg, kml

module.exports = {
    async index(req, res) {
  
      const { from, to, value } = req.query;
  
      if (!from) { res.json({ error: 'Por favor informe a unidade de origem!' }); }
      if (!to) { res.json({ error: 'Por favor informe a unidade de destino!' }); }
      if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }
      if (from === to) { res.json({ error: 'As unidades de origem e destino não podem ser iguais!' }); }
  
      if (!(from === "c" || from === "mc" | from === "uc")) {
        res.json({ error: `A medida de origem não pode ser ${from}!` });
      }
      if (!(to === "c" || from === "mc" | from === "uc")) {
        res.json({ error: `A medida de destino não pode ser ${to}!` });
      }
  
      if (from === 'c' && to === 'mc') { convertedValue = parseFloat(value) * 10^(-3); }
      if (from === 'mc' && to === 'c') { convertedValue = parseFloat(value) / 10^(-3); }
      if (from === 'c' && to === 'rc') { convertedValue = parseFloat(value) * 10^(-6); }
      if (from === 'rc' && to === 'c') { convertedValue = parseFloat(value) / 10^(-6); }
      if (from === 'c' && to === 'uc') { convertedValue = parseFloat(value) * 10^(-9); }
      if (from === 'uc' && to === 'c') { convertedValue = parseFloat(value) / 10^(-9); }
  
      const response = {
        unitFrom: from,
        unitTo: to,
        originalValue: parseFloat(value),
        convertedValue,
      }
  
      res.json(response);
    }
  }