import './HomePage.css'
import { ReactComponent as LeaderShip } from "../../Images/LeaderShip.svg";
import Header from '../Header/Header.js'


function HomePage() {
  return (
      <div className='home-page'>
        <Header/> 
        <section className='select-catagory' data-cy='select-catagory'>
          <article className='catagory hope' data-cy='catagory-hope'>
            <h2 className='hope-title' data-cy='hope-title'>Hope</h2>
          </article>
          <article className='catagory leadership' data-cy='catagory-leadership'>
            <LeaderShip className='leadership-logo'/>
            <h2 className='leadership-title' data-cy='leadership-title'>Leadership</h2>
          </article>
          <article className='catagory inspiration' data-cy='catagory-inspiration'>
            <h2 className='inspiration-title' data-cy='inspiration-title'>Inspiration</h2>
          </article>
          <article className='catagory laughs' data-cy='catagory-laughs'>
            <h2 className='laughs-title' data-cy='laughs-title'>Laughs</h2>
          </article>
        </section>
        <button>Favorites</button> 
      </div>
  )
}

export default HomePage