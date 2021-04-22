import './CardDisplay.css'
import Card from '../Card/Card.js'
import { useEffect, useState } from 'react'
import { fetchQuotes } from '../../apiCalls'


function CardDisplay({ quoteType, addToFavorites }) {


  const [currentCards, setCurrentCards] = useState()
  const [quoteList, setQuoteList] = useState([])


  useEffect(() => {
    fetchQuotes(quoteType)
    .then(data => setQuoteList(data.quotes))
  },[])


  useEffect(() => {
    if(quoteList) {
      const latestCards = quoteList.map((quote, index) => {
        return <Card
                  key={Date.now(), index}
                  id={index}
                  quote={quote.body}
                  author={quote.author}
                  addToFavorites={addToFavorites}
                />
      })
      setCurrentCards(latestCards)
    }
  }, [quoteList])

  

  return (
    <>
    <p>{`${quoteType} quotes`}</p>
      {currentCards && currentCards}
    </>
  )
}


export default CardDisplay