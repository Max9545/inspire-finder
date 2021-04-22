export const fetchQuotes = quoteType => {
  return fetch(`https://favqs.com/api/quotes/?filter=${quoteType}&type=tag`, {
    method: 'GET',
    headers: {
      'Authorization': 'Token 8bc7dfa7e20dffcf95c9191267966f40'    
    }
  })
  .then((response) => {
    if(!response.ok) {
      throw Error(`Unable to ge those ${quoteType} quotes right now, refresh and try again later.`)
    }
    return response.json()
  })
}




    // .then(res => res.json())
    // .then(data => setInspirational(data.quotes))