import { HeaderContainer , Section, Title } from './styles'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export function Header({text}){
  return(
    <HeaderContainer>
      <Section>
        <Title>{text}<Link to='/'><strong>Rick and Morty</strong></Link></Title>
      </Section>
    </HeaderContainer >
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired, 
};