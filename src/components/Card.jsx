import { Link } from "react-router-dom"

function Card({imgUrl,title,price,id}) {
    return(
        <div className="w-[250px] h-[600]  bg-pink-200 rounded-xl flex flex-col gap-6 items-center">
            <img src={imgUrl} alt={title} className="w-[200px] h-[200px] object-contain p-2 pt-3 rounded" />
            <Link to={`/shop/${id}`} className="p-2">{title}</Link>
            <span className="p-2">{price}</span>
        </div>
    )
}
export default Card