import './Card.css'

function Card({ quote, author, toggleFavorite, id, quoteType }) {
  return (
    <div className={`card ${quoteType}-card`} data-cy='card'>
      <p className={`quote ${quoteType}-quote`} data-cy='quote'>{quote}</p>
      <p className={`author ${quoteType}-author`} data-cy='author'>-- {author}</p>
      <button className='toggle-favorite' data-cy='toggle-favorite'onClick={() => toggleFavorite({ id: id, quote: quote, author: author,  quoteType: quoteType})}>Toggle Whether To Remember This One</button>
    </div>
  )
}

export default Card