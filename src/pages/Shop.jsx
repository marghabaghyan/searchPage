import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Shop() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.products || []);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [searchValue]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then(res => setCategories(res))
      .catch((err) => console.error("Fetch categories error:", err));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-6 py-10">

      <div className="flex gap-4 flex-wrap justify-center">
        {categories.map((elm) => (
          <Link
            key={elm.slug}
            to={`/products/${elm.slug}`}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            {elm.name}
          </Link>
        ))}
      </div>

  
      <h1 className="text-2xl font-bold text-gray-600 mt-6">Product Finder</h1>

      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search products..."
        className="bg-gray-200 px-4 w-[300px] h-9 rounded-xl outline-none border-2 border-black mt-4"
      />


      <div className="flex flex-wrap justify-center gap-6 px-6 max-w-[1440px] mt-8">
        {data.length > 0 ? (
          data.map((elm) => (
            <Card
              key={elm.id}
              imgUrl={elm.thumbnail}
              title={elm.title}
              price={elm.price}
              id={elm.id}
            />
          ))
        ) : (
          searchValue.trim() !== "" && (
            <p className="text-gray-500">No products found.</p>
          )
        )}
      </div>
    </div>
  );
}

export default Shop;
