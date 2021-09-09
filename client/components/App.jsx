import React, { useState, useEffect } from 'react'

import { getPics } from '../api'

function App () {
  const [houses, setHouses] = useState([])
  const [random, setRandom] = useState([])

  useEffect(() => {
    getPics()
      .then(pics => {
        setHouses(pics.houses)
        setRandom(pics.random)
      })
  }, [])

  return (
    <>
      <h1>hi :)</h1>
      <p>Click for a mystery picture</p>
      <h3>Houses</h3>
      {houses.map((img, i) => <div>
        <a href={`/houses/${img}`}>House {i + 1}</a>
      </div>)}
      <h3>Random</h3>
      {random.map((img, i) => <div>
        <a href={`/random/${img}`}>Picture {i + 1}</a>
      </div>)}
    </>
  )
}

export default App
