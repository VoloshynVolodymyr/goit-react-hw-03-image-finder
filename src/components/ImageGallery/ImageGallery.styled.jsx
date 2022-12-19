import styled from "@emotion/styled";

export const Ul = styled.ul`
    display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${props => props.theme.spacing(4)};
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props.theme.colors.lightColor};
`