import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { SearchBox } from "../components/SearchBox";
import { getToken, getAllCources } from "../API/api";
import { useEffect, useState } from "react";

const Products = () => {
  getToken();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getAllCources().then((res) => {
      if (res) {
        setCourses(res);
      }
    });
  }, []);
// console.log(courses);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  let visibleProducts = [];

  if(courses) {visibleProducts = courses.filter((product) =>
    product.title.toLowerCase().includes(productName.toLowerCase())
  );}

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList courses={visibleProducts} />
    </main>
  );
};

export default Products;
