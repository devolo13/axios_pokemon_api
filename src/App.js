// import thing from ./place.jsx
import { useState } from "react";
import DisplayPokemon from "./components/DisplayPokemon";
import GetPokemon from "./components/GetPokemon";

function App() {
  const [listOfNames, setListOfNames] = useState([]);
  return (
    <div className="container">
      <GetPokemon setListOfNames={setListOfNames}/>
      < DisplayPokemon listOfPokemon={listOfNames} />
    </div>
  );
}

export default App;
