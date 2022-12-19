import styled from "@emotion/styled";

export const ButtonMore = styled.button`
    padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  border-radius: 2px;
  background-color: ${props => props.theme.colors.mainColor};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${props => props.theme.spacing(5)};
  line-height: ${props => props.theme.spacing(6)};
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,:focus {
  background-color: ${props => props.theme.colors.secondColor};
}
`