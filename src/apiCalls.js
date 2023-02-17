export const fetchQuotes = quoteType => {
  return fetch(`https://stormy-eyrie-07248.herokuapp.com/https://favqs.com/api/quotes/?filter=${quoteType}&type=tag`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'https://favqs.com',
      'Authorization': 'Token 8bc7dfa7e20dffcf95c9191267966f40'    
    }
  })
  .then((response) => {
    if(!response.ok) {
      throw Error(`Unable to get those ${quoteType} quotes right now, refresh and try again later.`)
    }
    return response.json()
  })
}

export const searchQuotes = topic => {
  return fetch(`https://stormy-eyrie-07248.herokuapp.com/https://favqs.com/api/quotes/?filter=${topic}`, {
    // cors: Access-Control-Allow-Origin: *,
    method: 'GET',
    headers: {
      'Authorization': 'Token 8bc7dfa7e20dffcf95c9191267966f40'    
    }
  })
  .then((response) => {
    if(!response.ok) {
      throw Error(`Unable to get a quote about: "${topic}"  right now, refresh and try again later.`)
    }
    return response.json()
  })
}

