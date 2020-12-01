import React, { useState, useEffect } from 'react';

const App = () => {

  const [message, setMessage] = useState('frontend thing')

  const callBackendAPI = async () => {
    const response = await fetch('/api/test', {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' }
    })

    const body = await response.json();

    return (response.status !== 200) ? console.log('error') : body.message
  }

  useEffect(() => {
    callBackendAPI()
      .then(res => {
        setMessage(res)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <p>{message}</p>
      <input type="submit" onSubmit={callBackendAPI}></input>
    </div>
  )
}

export default App;