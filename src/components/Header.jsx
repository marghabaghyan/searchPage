import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-6 max-w-[1440px] mx-auto 
           border-b-2 border-black 
           bg-gray-100 bg-opacity-80 
           sticky top-0 z-50 backdrop-blur-md">
      <div className="logo">
        <img
          className="w-[80px] h-[80px] object-contain"
          src="https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png"
          alt="Fresh Logo"
        />
      </div>

      <nav>
        <ul className="flex gap-8 items-center list-none text-lg font-semibold text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:text-gray-900 hover:border-gray-900  duration-200">
            
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="hover:text-gray-900 transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
