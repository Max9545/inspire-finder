import './Card.css'

function Card({ quote, author, addToFavorites, id }) {
  return (
    <>
      <p>{quote}</p>
      <p>author:{author}</p>
      <button onClick={() => addToFavorites({quote: quote, author: author, id: id})}>Remember This One</button>
    </>
  )
}

export default Card