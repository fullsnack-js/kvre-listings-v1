export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatPrice(price: number) {
  return `$${new Intl.NumberFormat().format(price)}`
}