import './Card.css'
import PropTypes from 'prop-types';
import React from 'react';

type Props = {
  quote: string,
  author: string,
  id: number,
  quoteType: string,
  toggleFavorite: Function,
}

function Card({ quote, author, toggleFavorite, id, quoteType }: Props) {
  return (
    <div className={`card ${quoteType}-card`} data-cy='card'>
      <p className={`quote ${quoteType}-quote`} data-cy='quote'>{quote}</p>
      <p className={`author ${quoteType}-author`} data-cy='author'>-- {author}</p>
      <button className='toggle-favorite' data-cy='toggle-favorite'onClick={() => toggleFavorite({ id: id, quote: quote, author: author,  quoteType: quoteType})}>( + ) Add/Remove from Favorites ( - )</button>
    </div>
  )
}

export default Card

Card.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  toggleFavorite: PropTypes.func,
  id: PropTypes.number,
  quoteType: PropTypes.string,
}