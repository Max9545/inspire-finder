import './Form.css'
import { useState } from 'react'
import { searchQuotes } from '../../apiCalls.js'
import PropTypes from 'prop-types';

function Form({ setSearchList }) {

  const [topic, setTopic] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    searchQuotes(topic)
    .then(data => setSearchList(data.quotes))
  }

  return (
    <>  
      <form className='search-form' data-cy='search-form'onSubmit={handleSubmit}>
        <label>
          Search Any Topic
          <input
            className='search-input'
            data-cy='search-input'
            type='text'
            name='Search Any Topic'
            value={topic}
            onChange={e => setTopic(e.target.value)}
          />
        </label>
        <input className='search-button' data-cy='search-button'type='submit' value="submit and click 'See Searched'" />
      </form>
    </>
  )
}

export default Form

Form.propTypes = {
  setSearchList: PropTypes.func,
}