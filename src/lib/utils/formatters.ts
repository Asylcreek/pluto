/**
 * Converts a number to a currency string using the current or specified locale
 * @param amount The amount to format
 * @param options Extra Intl.NumberFormatOptions - `optional`
 * @param locale The locale or locales to adhere to - `optional`
 * @returns string
 */
export const formatCurrency = (
  amount: number,
  options?: Intl.NumberFormatOptions,
  locale?: string | string[]
) => {
  return new Intl.NumberFormat(locale, {
    currency: 'NGN',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    ...options,
    style: 'currency'
  }).format(amount);
};
 
 
 
 
