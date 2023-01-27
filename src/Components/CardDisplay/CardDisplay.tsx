import './CardDisplay.css'
import Card from '../Card/Card'
import Header from '../Header/Header.js'
import { useEffect, useState } from 'react'
import { fetchQuotes } from '../../apiCalls'
import PropTypes from 'prop-types';
import React from 'react'
import { DisplayProps, Quote } from '../../interface';


function CardDisplay({ quoteType, toggleFavorite }: DisplayProps) {


  const [currentCards, setCurrentCards] = useState<(JSX.Element | undefined)[]>([])
  const [quoteList, setQuoteList] = useState<Quote[] | undefined>([])


  useEffect(() => {
    fetchQuotes(quoteType)
    .then(data => setQuoteList(data.quotes))
  },[])


  useEffect(() => {
    if(quoteList) {
      const latestCards: (JSX.Element | undefined)[] = quoteList.map((quote: Quote) => {
        if(quote.body) {
          return (
            <>
              <Card
                    key={Date.now()}
                    id={quote.id}
                    quote={quote.body}
                    author={quote.author}
                    quoteType={quoteType}
                    toggleFavorite={toggleFavorite}
                  />
            </>
          )
        }
      })
      setCurrentCards(latestCards)
    }
  }, [quoteList])

  return (
    <>
    <Header/>
    <h3 className='card-display-header' data-cy='card-display-header'>{`${quoteType} Quotes`}</h3>
      {currentCards && currentCards}
    </>
  )
}


export default CardDisplay


CardDisplay.propTypes = {
  quoteType: PropTypes.string,
  toggleFavorite: PropTypes.func
}