import 'intl';
import 'intl/locale-data/jsonp/en';

export function getAmountValue(value) {
  const number = parseFloat(value);

  const formatedNumber = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    currency: 'BRA',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(number));

  if (number >= 0)
    return {
      creditIn: true,
      amount: formatedNumber,
    };

  return {
    creditIn: false,
    amount: formatedNumber,
  };
}
