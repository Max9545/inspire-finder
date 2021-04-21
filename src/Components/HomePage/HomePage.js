import './HomePage.css'
import { ReactComponent as SunLogo } from "../../Images/SunLogo.svg";

function HomePage() {
  return (
      <>
        <article className='catagory hope' data-cy='catagory-hope'>
          <h2 className='hope-title' data-cy='hope-title'>Hope</h2>
        </article>
        <article className='catagory leadership' data-cy='catagory-leadership'>
          <h2 className='leadership-title' data-cy='leadership-title'>Leadership</h2>
        </article>
        <article className='catagory inspiration' data-cy='catagory-inspiration'>
          <h2 className='inspiration-title' data-cy='inspiration-title'>Inspiration</h2>
        </article>
        <article className='catagory laughs' data-cy='catagory-laughs'>
          <h2 className='hope-title' data-cy='hope-title'>Laughs</h2>
        </article>
      </>
  )
}

export default HomePage