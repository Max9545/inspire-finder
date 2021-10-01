
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
  toggleFavorite: (arg1: NewFavorite) => void
}

export interface NewFavorite {
  quote: string,
  author: string,
  id: number,
  quoteType: string,
}

export interface DisplayProps {
  quoteType: string,
  toggleFavorite: (arg1: NewFavorite) => void
}



