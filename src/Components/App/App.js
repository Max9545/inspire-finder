import { useEffect, useState } from 'react'
import './App.css';
import CardDisplay from '../CardDisplay/CardDisplay.js'
import { Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage.js'
import UserLedDisplay from '../UserLedDisplay/UserLedDisplay.js'


function App() {

  const [favorites, setFavorites] = useState([])
  const [searchList, setSearchList] = useState()

//   useEffect(() => {
// searchQuotes('cat')
// .then(data => console.log(data))
//   },[])

  const toggleFavorite = (newFavorite) => {
      if(!favorites.some(favorite => favorite.id === newFavorite.id)) {
        console.log('add')
        // favorites.push(newFavorite)
        // setFavorites(favorites)
        setFavorites([...favorites, newFavorite]) 
        //why does this not work? some kind of background prevention from the API?
      } else {
        console.log('delete')
       favorites.filter(favorite => favorite.id !== newFavorite.id)
        setFavorites(favorites.filter(favorite => favorite.id !== newFavorite.id))
      }
  }



  return (
    <div className='app'>
     
     <Route exact path='/' render={() => <HomePage setSearchList={setSearchList}/>}/>
     <Route exact path='/hope' render={() => <CardDisplay quoteType='hope' toggleFavorite={toggleFavorite}/>}/>
     <Route exact path='/leadership' render={() => <CardDisplay quoteType='leadership' toggleFavorite={toggleFavorite}/>}/>
     <Route exact path='/inspirational' render={() => <CardDisplay quoteType='inspirational' toggleFavorite={toggleFavorite}/>}/>
     <Route exact path='/laughs' render={() => <CardDisplay quoteType='funny' toggleFavorite={toggleFavorite}/>}/>
     <Route exact path='/searched' render={() => <UserLedDisplay quoteList={searchList} toggleFavorite={toggleFavorite} type='searched'/>}/>
     <Route exact path='/favorites' render={() => <UserLedDisplay quoteList={favorites} toggleFavorite={toggleFavorite} type='favorites'/>}/>
    </div>
  );
}

export default App;
