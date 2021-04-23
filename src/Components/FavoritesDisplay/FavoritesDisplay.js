import './FavoritesDisplay.css'
import Card from '../Card/Card.js'
import Header from '../Header/Header.js'

function FavoritesDisplay({ favorites,  toggleFavorite }) {

  const favCards = favorites.map((quote) => {
    return (
            <>
                <p className={`label ${quote.quoteType}-label`}>{`${quote.quoteType} quote`}</p>
                <Card
                  id={quote.id}
                  quote={quote.quote}
                  author={quote.author}
                  quoteType={quote.quoteType}
                  toggleFavorite={toggleFavorite}
                />
              </>
            )
  })

  return (
    <>
      <Header/>
      <h3>Use These As Intent For Your Days</h3>
      {!favorites && <p>No Favs yet</p>}
      {favCards && favCards}
    </>
  )
}

export default FavoritesDisplay