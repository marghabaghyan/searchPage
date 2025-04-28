import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  return (
    <div className="flex justify-center items-center mt-20">
      {product ? (
        <div className="flex gap-10 items-center">
     
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-80 h-80 object-contain rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-4 max-w-lg">
            <h2 className="text-4xl font-bold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-2xl"><b>Price:</b>${product.price}</p>
            <p className="text-2xl "><b>Category:</b>{product.category}</p>
          </div>
        </div>
      ) : (
        <p>there is no details</p>
      )}
    </div>
  );
}

export default ProductDetail;
