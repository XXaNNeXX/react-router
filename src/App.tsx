import './App.css'
import {Route, Routes, useParams} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import { useState } from 'react'
import CharactersOutput from "./CharactersOutput.tsx";
import {characters, RickAndMortyCharacter} from "./RickAndMortyCharacters.ts";
import Header from "./Header.tsx";
// import CharacterInfo from "./CharacterInfo.tsx";

export default function App() {

    const [character, setCharacter] = useState<RickAndMortyCharacter[]>(characters.results)
    // const param = useParams()
    // const id = param.id

  return (
    <>
      <Header/>
      <Routes>
        <Route path={"/"}/>
        <Route path={"/welcome"} element={<Welcome/>}/>
        <Route path={"/characters"} element={<CharactersOutput allCharacters={character}/>}/>
        {/*<Route path={"/characters/:id"} element={<CharacterInfo oneCharacter={param.id}/>}/>*/}
      </Routes>

    </>
  )
}


