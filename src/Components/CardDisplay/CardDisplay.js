import './CardDisplay.css'
import Card from '../Card/Card.js'
import Header from '../Header/Header.js'
import { useEffect, useState } from 'react'
import { fetchQuotes } from '../../apiCalls'


function CardDisplay({ quoteType, toggleFavorite}) {


  const [currentCards, setCurrentCards] = useState()
  const [quoteList, setQuoteList] = useState([])


  useEffect(() => {
    fetchQuotes(quoteType)
    // .then((data => console.log(data)))
    .then(data => setQuoteList(data.quotes))
  },[])


  useEffect(() => {
    if(quoteList) {
      const latestCards = quoteList.map((quote) => {
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