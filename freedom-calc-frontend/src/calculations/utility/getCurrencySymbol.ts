/**
 * Returns the symbol for the given currency
 * @param currency The currency to get the symbol for
 */
export function getCurrencySymbol(currency: string): string {
  switch (currency) {
    case "EUR €":
      return "€";
    case "USD $":
      return "$";
    case "GBP £":
      return "£";
    case "VND ₫":
      return "₫";
    default:
      return "";
  }
}
