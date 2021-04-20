import './CardDisplay.css'
import Card from '../Card/Card.js'
import { useEffect, useState } from 'react'


function CardDisplay({ quoteList }) {


  const [currentCards, setCurrentCards] = useState()

  useEffect(() => {
    const latestCards = quoteList.map(quote => {
      return <Card
                quote={quote.body}
                author={quote.author}
              />
    })

    setCurrentCards(latestCards)
  },[])

  

  return (
    <>
    <p>hi</p>
      <Card/>
      {quoteList && currentCards}
    </>
  )
}


export default CardDisplay