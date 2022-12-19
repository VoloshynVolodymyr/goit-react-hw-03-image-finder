import styled from "@emotion/styled";

export const AppStyle = styled.div`
    display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: ${props => props.theme.spacing(6)};
  background-color: ${props => props.theme.colors.lightColor};
  width: 100%;
  height: 100vh;
`