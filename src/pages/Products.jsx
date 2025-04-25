import { useParams } from "react-router-dom"

function Products() {
    const {id} = useParams()
    console.log(id);
    
    return(
    <div>
        <h1>Single page of Product</h1>
    </div>
    )
}
export default Products