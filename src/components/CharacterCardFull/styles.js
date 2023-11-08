import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center; 
  margin-top: 40px;
`
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 307px;
  height: 70%;
  border: 3px solid ;
  background: var(--color-brown);
  border-radius: 5px;
  padding-top: 7px;
  padding-left: 7px;
`

export const Avatar = styled.div`
  img {
    border-radius: 5px 5px 0px 0px;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #e4a788;
    font-family: Creepster;
    font-size: 18px;
  }
  strong {
    color: var(--color-pink);
  }
`
export const Footer = styled.footer`
 display: flex;
 align-items: center;
 margin-top: 5px;
`
export const ToGoBack = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  align-items: center;
  color: var(--color-brown);
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    color: var(--color-pink);
    transition: 0.3s ease-in-out;
  }
`

