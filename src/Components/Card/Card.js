import './Card.css'

function Card({ quote, author, addToFavorites, id, quoteType }) {
  return (
    <div className={`card ${quoteType}-card`} data-cy='card'>
      <p className={`quote ${quoteType}-quote`} data-cy='quote'>{quote}</p>
      <p className={`author ${quoteType}-author`} data-cy='author'>-- {author}</p>
      <button onClick={() => addToFavorites({ id: id, quote: quote, author: author,  quoteType: quoteType})}>Remember This One</button>
    </div>
  )
}

export default Card