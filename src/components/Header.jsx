import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-ful mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex-wrap">
            <span className="text-slate-500">Sijen</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex item-center">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-24sm:w-64"
            placeholder="search..."
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 text">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              about
            </li>
          </Link>
          <Link to="/signin">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              signin
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
