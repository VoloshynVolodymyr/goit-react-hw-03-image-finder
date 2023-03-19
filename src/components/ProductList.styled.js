import styled from "styled-components";

export const Title = styled.h1`
text-align: center;
`;

export const Container = styled.div`
  display: grid;
  grid: 600px auto / 1fr 1fr;
  grid-gap: 15px;
  grid-template-rows: 1fr;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const ProductName = styled.h3`
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

export const Description = styled.span`
display: block;
  margin-top: 8px;
  margin-bottom: 0;
  color: #e74a3b;
  height: 60px;
`

export const DescriptionWrapper = styled.div`
padding: 10px;
`
export const Li = styled.li`
    display: inline-block;
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    padding-top: 10px;
    color: #333333;
`
