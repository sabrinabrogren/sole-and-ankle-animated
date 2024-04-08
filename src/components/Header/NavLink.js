import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

export const NavLink = ({href, title}) => {
  return (
    <LinkContainer>
      <StyledLink href={href}>{title}</StyledLink>
      <FlippedLink href={href}>{title}</FlippedLink>
    </LinkContainer>
  )
}

const LinkContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  transition: 200ms;
  display: inline-block;
  
  ${LinkContainer}:hover & {
    transform: translateY(-100%);
  }

  ${LinkContainer}:first-of-type & {
    color: var(--color-secondary);
  }
`;

const FlippedLink = styled(StyledLink)`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${WEIGHTS.bold};
  transform: translateY(100%);
  transition: 200ms;

  ${LinkContainer}:hover & {
    transform: translateY(0);
  }
`;