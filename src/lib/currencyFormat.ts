export function formatCurrency(value: number, currencySymbol: string = "$"): string {
    return currencySymbol + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}