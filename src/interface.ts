
export interface Quote {
  id: number,
  body: string,
  author: string,
}

export interface CardProps {
  quote: string,
  author: string,
  id: number,
  quoteType: string,
  toggleFavorite(): void
}


