import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center gap-16 py-10 px-4 max-w-[1440px] mx-auto">
      
      <section className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Fresh Products
        </h1>
        <p className="text-gray-600 max-w-xl">
          Discover high-quality, fresh, and hand-picked products just for you. Shop the latest collections now!
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </section>

      <section className="flex flex-col items-center gap-8 w-full">
        <h2 className="text-2xl font-bold text-gray-700">Featured Products</h2>

      

        <Link
          to="/shop"
          className="px-4 py-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition"
        >
          View All Products
        </Link>
      </section>
    </div>
  );
}

export default App;
