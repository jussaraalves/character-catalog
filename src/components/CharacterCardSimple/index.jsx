import { Avatar, Infos, Main, Section} from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api"
import { useEffect, useState } from "react";
import {CardContainer} from '../CardContainer/index'
import { Header } from "../Header";

export function CharacterCardSimple(){
  const[characters, setCharacters] = useState([]);

  async function getCharacters(){
    await api
      .get("/character")
      .then((response)=>{
        setCharacters(response.data.results)  
      })
      .catch((error)=>{
        console.log(error.response.data.data)
      })
  }

  useEffect(()=>{
    getCharacters()
    
  }, [])

  return(
    <>
    <Header text="Catálogo de personagens da série "/>
    <CardContainer>
      {characters.map((character) => (
        <Main key={character.id}>
          <Section>
            <Link to={`/character/${character.id}`}>
              <Avatar>
                <img src={character.image} alt={character.name} />
              </Avatar>
            </Link>
            <Infos>
              <span><strong>{character.name}</strong></span>
              <span><strong>Espécie: </strong>{character.species}</span>
            </Infos>
          </Section>
        </Main>
    ))}
    </CardContainer>
    </>
    
      
  )
}