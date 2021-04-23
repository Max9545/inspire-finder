import './Header.css'
import { ReactComponent as  Inspiration } from "../../Images/Inspiration.svg";


function Header() {
  return (
    <div className='header-container'>
      <h1 className='header-title' data-cy='header-title' >Inspire<br/>Finder</h1>
      <Inspiration className='app-logo'/>
    </div>
  )
}

export default Header