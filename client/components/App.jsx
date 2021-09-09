import React, { useState, useEffect } from 'react'

import { getPics } from '../api'

function App () {
  const [houses, setHouses] = useState([])
  const [other, setOther] = useState([])

  useEffect(() => {
    getPics()
      .then(pics => {
        setHouses(pics.houses)
        setOther(pics.other)
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
      {other.map((img, i) => <div>
        <a href={`/random/${img}`}>Picture {i + 1}</a>
      </div>)}
    </>
  )
}

export default App
