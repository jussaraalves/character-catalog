import { Link, useParams } from 'react-router-dom';
import {Avatar, Infos, Main, Section, Footer, ToGoBack} from './styles.js'
import {ArrowFatLeft} from "phosphor-react";
import { useEffect, useState } from 'react';
import api from '../../services/api.js';
import { Header } from '../Header/index.jsx';

export function CharacterCardFull(){
  const { id } = useParams();
  const [characterDetails, setCharacterDetails] = useState({});
  
  async function getCharacterDetails(){
    await api
      .get(`/character/${id}`)
      .then((response)=>{
        setCharacterDetails(response.data)
        console.log(response.data)
        
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  
  useEffect(()=>{
    getCharacterDetails();
    
  },[id])

  return (
    <>
      <Header text="Detalhes do Personagem da série "/>
      <Main>
        <Section>
          <Avatar>
            <img src={characterDetails.image} alt="" />
          </Avatar>
          <Infos>
            <span><strong>Nome:</strong> {characterDetails.name}</span>
            <span><strong>Espécie:</strong> {characterDetails.species}</span>
            <span><strong>Gênero:</strong> {characterDetails.gender}</span>
            {characterDetails.origin && 
            <span><strong>Origem:</strong> {characterDetails.origin.name}</span>
            }
            {characterDetails.location && 
            <span><strong>Ultima vez visto em:</strong> {characterDetails.location.name}</span>
            }
            <span><strong>Status:</strong> {characterDetails.status}</span>
            <span><strong>Registro criado:</strong> {characterDetails.created}</span>
            <span>______________________________</span>
            {characterDetails.episode && 
            <span>O(a) {characterDetails.name} aparece em {characterDetails.episode.length} episódios</span>
            }
          </Infos>
        </Section>
      </Main>
      <Footer>
        <Link to='/'>
          <ToGoBack>
            <ArrowFatLeft size={25}/>
            <span>voltar para home</span>
          </ToGoBack>
        </Link>
      </Footer>
    </>
  )
}