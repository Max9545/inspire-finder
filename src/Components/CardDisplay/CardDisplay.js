import './CardDisplay.css'
import Card from '../Card/Card.js'
import Header from '../Header/Header.js'
import { useEffect, useState } from 'react'
import { fetchQuotes } from '../../apiCalls'


function CardDisplay({ quoteType, addToFavorites}) {


  const [currentCards, setCurrentCards] = useState()
  const [quoteList, setQuoteList] = useState([])


  useEffect(() => {
    fetchQuotes(quoteType)
    .then(data => setQuoteList(data.quotes))
  },[])


  useEffect(() => {
    if(quoteList) {
      const latestCards = quoteList.map((quote) => {
        return <Card
                  key={quote.id}
                  id={quote.id}
                  quote={quote.body}
                  author={quote.author}
                  quoteType={quoteType}
                  addToFavorites={addToFavorites}
                />
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