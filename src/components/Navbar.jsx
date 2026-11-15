
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Collections", path: "/collections" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="sticky top-0 w-full bg-[#EEEEEC] px-4 sm:px-6 pt-5 z-50">

      <div className="max-w-[1200px] mx-auto">

        {/* Main Navbar */}
        <div className="h-[72px] bg-white/85 rounded-full
          px-6 md:px-9 flex items-center justify-between
          shadow-sm">

          {/* Logo */}
          <Link
            to="/"
            className="text-[25px] md:text-[30px] font-bold
            tracking-[7px] text-black shrink-0"
          >
            AURELIA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[17px] text-black
                hover:text-[#A98955] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/collections"
            className="hidden md:flex items-center justify-center
            bg-[#191919] text-white rounded-full
            px-8 h-[48px] text-[16px] font-semibold
            hover:bg-[#A98955] transition-all duration-300"
          >
            Shop Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-3 bg-white rounded-3xl
            p-6 shadow-lg flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-base text-black hover:text-[#A98955]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/collections"
              onClick={() => setMenuOpen(false)}
              className="bg-[#191919] text-white rounded-full
              text-center py-3 font-medium"
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

