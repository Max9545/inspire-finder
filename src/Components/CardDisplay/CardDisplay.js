import './CardDisplay.css'
import Card from '../Card/Card.js'
import { useEffect, useState } from 'react'
import { fetchQuotes } from '../../apiCalls'


function CardDisplay({ quoteType }) {


  const [currentCards, setCurrentCards] = useState()
  const [quoteList, setQuoteList] = useState([])


  useEffect(() => {
    fetchQuotes(quoteType)
    .then(data => setQuoteList(data.quotes))
  })


  useEffect(() => {
    if(quoteList) {
      const latestCards = quoteList.map(quote => {
        return <Card
                  quote={quote.body}
                  author={quote.author}
                />
      })
      setCurrentCards(latestCards)
    }
  },[quoteList])

  

  return (
    <>
    <p>hi</p>
      <Card/>
      {currentCards && currentCards}
    </>
  )
}


export default CardDisplay