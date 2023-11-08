import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
`

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); 
  grid-gap: 10px; 
  grid-template-areas: "center";
  place-content: center;
  padding: 10px;
  width: 50%;
  border-radius: 5px;
`
export const Image = styled.img`
  text-align: center;
  width: 390PX;
  height: 100PX;
`