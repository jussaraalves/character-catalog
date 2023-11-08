
import PropTypes from 'prop-types';
import { Main, Section } from './styles';

export function CardContainer({ children }) {
  return (
    <Main> 
      <Section>
        {children}
      </Section>
    </Main>
  );
}

CardContainer.propTypes = {
  children: PropTypes.node
};
