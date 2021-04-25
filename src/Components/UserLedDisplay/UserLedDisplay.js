import './UserLedDisplay.css'
import Card from '../Card/Card.js'
import Header from '../Header/Header.js'
import { Router } from 'react-router'

function FavoritesDisplay({ quoteList,  toggleFavorite, type }) {

  const favCards = quoteList.map((quote) => {
    return (
            <>
                <p className={`label ${quote.quoteType? quote.quoteType : 'searched'}-label`} data-cy='label'>{`${quote.quoteType ? quote.quoteType : 'searched'} quote`}</p>
                <Card
                  id={quote.id}
                  quote={quote.quote ? quote.quote : quote.body}
                  author={quote.author}
                  quoteType={quote.quoteType ? quote.quoteType : 'searched'}
                  toggleFavorite={toggleFavorite}
                />
              </>
            )
  })

  return (
    <>
      <Header/>
      {(type === 'favorites') && <h3 className='favorites-display-header' data-cy='favorites-display-header'>Use These As Intent For Your Days</h3>}
      {(type === 'searched') && <h3 className='favorites-display-header' data-cy='favorites-display-header'>Starting The Adventure...</h3>}
      {!quoteList.length && (type === 'favorites') && <p className='no-user-data' data-cy='no-user-data'>No Favorites yet</p>}
      {!quoteList.length && (type === 'searched') && <p className='no-user-data' data-cy='no-user-data'>No Searched Quotes yet</p>}
      {favCards && favCards}
    </>
  )
}

export default FavoritesDisplay