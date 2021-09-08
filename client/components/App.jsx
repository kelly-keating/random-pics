import React, { useState, useEffect } from 'react'

import { getPics } from '../api'

function App () {
  const [imgs, setImgs] = useState([])

  useEffect(() => {
    getPics()
      .then(pics => setImgs(pics))
  }, [])

  return (
    <>
      <h1>hi :)</h1>
      <p>Click the link for whatever room you are in</p>
      {imgs.map((img, i) => <div>
        <a href={`/houses/${img}`}>Room {i + 1}</a>
      </div>)}
    </>
  )
}

export default App
