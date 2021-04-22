import './Card.css'

function Card({ quote, author, addToFavorites, id, quoteType }) {
  return (
    <div className={`card ${quoteType}-card`} data-cy='card'>
      <p>{quote}</p>
      <p>author:{author}</p>
      <button onClick={() => addToFavorites({quote: quote, author: author, id: id})}>Remember This One</button>
    </div>
  )
}

export default Card