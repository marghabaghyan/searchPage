import { Link } from "react-router-dom";

function Card({ imgUrl, title, price, id }) {
  return (
    <Link to={`/products/item/${id}`} className="w-[250px] h-[350px] bg-gray-300 rounded-xl flex flex-col gap-6 items-center hover:scale-105 transition">
      <img src={imgUrl} alt={title} className="w-[200px] h-[200px] object-contain p-2 pt-3" />
      <p className="p-2 font-bold text-center">{title}</p>
      <span className="p-2 font-semibold">{price}$</span>
    </Link>
  );
}

export default Card;
