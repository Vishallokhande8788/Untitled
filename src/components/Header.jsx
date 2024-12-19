import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-8 flex items-center gap-2">
      <Link to="/">
        <img src="favicon.png" className="w-10" />
      </Link>
      <p className="text-lg font-semibold">Untitled UI</p>
    </header>
  );
}

export default Header;