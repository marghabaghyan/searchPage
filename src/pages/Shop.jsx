import { useEffect, useState } from "react";
import Card from "../components/Card";

function Shop() {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/search?q=${searchValue}`)
            .then(res => res.json())
            .then(res => {
                console.log("Fetched recipes:", res.recipes);
                setData(res.recipes || []);
            })
            .catch(err => console.error("Fetch error:", err));
    }, [searchValue]);

    return (
        <div className="flex flex-col justify-center items-center gap-6 py-10">
            <h1 className="text-2xl font-bold text-amber-600">Recipe Finder</h1>

            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search recipes..."
                className="bg-amber-100 px-4 w-[300px] h-9 rounded-xl outline-none"
            />

            <div className="flex flex-wrap justify-center gap-6 px-6 max-w-[1440px]">
                {data.length > 0 ? (
                    data.map((elm) => (
                        <Card
                            key={elm.id}
                            imgUrl={elm.image}
                            title={elm.name}
                            price={elm.rating}
                            id={elm.id}
                        />
                    ))
                ) : (
                    searchValue.trim() !== "" && (
                        <p className="text-gray-500">No recipes found.</p>
                    )
                )}
            </div>
        </div>
    );
}

export default Shop;
