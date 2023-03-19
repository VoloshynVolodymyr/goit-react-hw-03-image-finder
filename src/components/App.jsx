import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Products = lazy(() => import("../pages/Products"));
const Students = lazy(() => import("./Students"));
const Specialists = lazy(() => import("./Specialists"));
const Experts = lazy(() => import("./Experts"));
const Tops = lazy(() => import("./Tops"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="students" element={<Students />} />
          <Route path="specialists" element={<Specialists />} />
          <Route path="experts" element={<Experts />} />
          <Route path="top-managers" element={<Tops />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
