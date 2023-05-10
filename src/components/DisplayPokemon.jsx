import React from 'react'

const DisplayPokemon = (props) => {
  return (
    <>
    <ul key="list of pokemon">
      {props.listOfPokemon.map((p) => <li key={p}>{p}</li>)}
    </ul>
    </>
  )
}

export default DisplayPokemon