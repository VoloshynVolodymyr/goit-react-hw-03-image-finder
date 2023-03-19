import { Link, useLocation } from "react-router-dom";
import { Title, Container, CardWrapper, ProductName, Description, DescriptionWrapper, Li, Ul } from "./ProductList.styled";
import { nanoid } from "nanoid";

export const ProductList = ({ courses }) => {
  const location = useLocation();
  return (
    <>
            <Title>Our courses</Title>
    <Container>

      {courses.map(({
        id, 
        previewImageLink, 
        title, description, 
        lessonsCount, 
        rating, 
        meta:{skills}}) => (
        <CardWrapper key={id}>
          <Link to={`${id}`} state={{ from: location }}>
          <img src={`${previewImageLink}/cover.webp`} alt="el.description" />
<DescriptionWrapper>
<ProductName>{title}</ProductName>
            <Description>{description}</Description>
            <div>
              <div style={{color:'#3e4462'}}>Count of lessons : {lessonsCount}</div>
              <div style={{color:'#3e4462'}}>Rating : {rating}</div>
            </div>
            {skills&&<Ul>{skills.map((el)=>(<Li key={nanoid()}>{el}</Li>))}</Ul>}
</DescriptionWrapper>
          </Link>
        </CardWrapper>
      ))}
    </Container>
    </>
  );
};
