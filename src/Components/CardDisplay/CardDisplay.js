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
    <p>{`Quotes In Regards To ${quoteType}`}</p>
      {currentCards && currentCards}
    </>
  )
}


export default CardDisplay