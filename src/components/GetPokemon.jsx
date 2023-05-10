import React from 'react'
import axios from 'axios';

const GetPokemon = (props) => {
  const buttonPress = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        let names = [];
        for (let i = 0; i < response.data.results.length; i++){
          names.push(response.data.results[i].name);
        }
        props.setListOfNames(names);
        return names;
    }).catch(err=>{
        console.log(err);
    });}
    return (
      <>
        <button key="button" className="btn btn-primary m-3" onClick={buttonPress}>Fetch Pokemon</button>
      </>
    )
  }

export default GetPokemon