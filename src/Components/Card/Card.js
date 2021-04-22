import './Card.css'

function Card({ quote, author, addToFavorites, id, meep }) {
  return (
    <>
      <p>{quote}</p>
      <p>author:{author}</p>
      <button onClick={() => addToFavorites(meep)}>Remember This One</button>
      {/* <button onClick={() => addToFavorites({quote: quote, author: author, id: id, meep: meep})}>Remember This One</button> */}
    </>
  )
}

export default Card