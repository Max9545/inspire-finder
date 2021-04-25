import './Form.css'
import { useState } from 'react'
import { searchQuotes } from '../../apiCalls.js'

function Form({ setSearchList }) {

  const [topic, setTopic] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    searchQuotes(topic)
    .then(data => setSearchList(data.quotes))
  }

  return (
    <>  
      <form onSubmit={handleSubmit}>
        <label>
          Search Any Topic
          <input
            type='text'
            value={topic}
            onChange={e => setTopic(e.target.value)}
          />
        </label>
        <input type='submit' value='submit' />
      </form>
    </>
  )
}


export default Form