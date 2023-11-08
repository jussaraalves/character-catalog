import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 5px ;
  width: 150px;
  overflow: hidden;
  background-color: var(--color-brown);
  backdrop-filter: blur(5px);
  border: 3px solid black;
  
  &:hover{
    transition: 0.5s ease-in-out;
  }
`
export const Avatar = styled.div`
  overflow: hidden;
  position: relative;
  img {
    width: 150px;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;
    transition: filter 0.5s ease-in-out; 
  }
  img:hover{
    transform: scale(1.2);
    filter: grayscale(70%) opacity(0.7);
  }

`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around; 
  padding: 8px 5px;
  height: 40px;
  color: var(--color-beige);
  strong {
    font-size: 14px;
    color: var(--color-pink);
  }
  
`

