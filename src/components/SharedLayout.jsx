import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link, Welcome } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
      <Welcome to="/" end>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          Welcome to Genesis school
        </Logo>
        </Welcome>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Courses</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
