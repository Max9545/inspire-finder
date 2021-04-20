import './Card.css'

function Card({ quote, author }) {
  return (
    <>
      <p>{quote}</p>
      <p>author:{author}</p>
    </>
  )
}

export default Card