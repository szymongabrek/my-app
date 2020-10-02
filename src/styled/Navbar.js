import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
`;

export const StyledNavLogo = styled.div`
  font-size: 2rem;

  & > a {
    text-decoration: none;
  }
`;

export const StyledNavItems = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: deeppink;
  }
`;
