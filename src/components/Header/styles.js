import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: var(--color-brown);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  
`
export const Section = styled.section`
  background-color: rgba(255, 255, 255, 0.7);
  width: 50%;
  border-radius: 0px 0px 5px 5px;

`

export const Title = styled.h1`
  strong{
    cursor: pointer;
    color: var(--color-darkgreen);
  }
  strong:hover{
    color: var(--color-pink);
    transition: 0.3s ease-in-out;
  }
`