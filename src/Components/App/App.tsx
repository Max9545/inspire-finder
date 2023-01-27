import { useState } from 'react'
import './App.css';
import CardDisplay from '../CardDisplay/CardDisplay'
import { Route, Redirect, Switch } from 'react-router-dom'
import HomePage from '../HomePage/HomePage.js'
import UserLedDisplay from '../UserLedDisplay/UserLedDisplay.js'
import { NewFavorite } from '../../interface';


function App() {

  const [favorites, setFavorites] = useState<NewFavorite[] | []>([])
  const [searchList, setSearchList] = useState([])

  const toggleFavorite = (newFavorite: NewFavorite) => {
      if(!favorites.some(favorite => favorite.id === newFavorite.id)) {
        // favorites.push(newFavorite)
        // setFavorites(favorites)
        setFavorites([...favorites, newFavorite]) 
        //why does this not work? some kind of background prevention from the API?
      } else {
        favorites.filter(favorite => favorite.id !== newFavorite.id)
        setFavorites(favorites.filter(favorite => favorite.id !== newFavorite.id))
      }
  }



  return (
    <div className='app'>
     <Switch>
      <Route exact path='/' render={() => <HomePage setSearchList={setSearchList}/>}/>

      <Route exact path='/hope' render={() => <CardDisplay quoteType='hope' toggleFavorite={toggleFavorite}/>}/>

      <Route exact path='/leadership' render={() => <CardDisplay quoteType='leadership' toggleFavorite={toggleFavorite}/>}/>

      <Route exact path='/inspirational' render={() => <CardDisplay quoteType='inspirational' toggleFavorite={toggleFavorite}/>}/>

      <Route exact path='/laughs' render={() => <CardDisplay quoteType='funny' toggleFavorite={toggleFavorite}/>}/>

      <Route exact path='/searched' render={() => <UserLedDisplay quoteList={searchList} toggleFavorite={toggleFavorite} type='searched'/>}/>

      <Route exact path='/favorites' render={() => <UserLedDisplay quoteList={favorites} toggleFavorite={toggleFavorite} type='favorites'/>}/>
      
      <Redirect from="*" to='/'/>
     </Switch>
     
    </div>
  )
}

export default App;


