import { useEffect, useState } from "react";
import {Link,useParams,} from "react-router-dom";

function ProductsWithCategories() {
  const { slug } = useParams(); 
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Slug:", slug);

    fetch(`https://dummyjson.com/products/categories/${slug}`)
      .then((res) => res.json())
      .then((res) => setData(res.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link to="/">Go to Home</Link>
      {data.length === 0 ? (
        <h3>No products available in this category.</h3>
      ) : (
        data.map((elm) => <h3 key={"product-title-"+elm.id}>{elm.title}</h3>)
      )}
    </div>
  );
}

export default ProductsWithCategories;
