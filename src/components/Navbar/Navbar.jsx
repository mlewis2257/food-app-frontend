import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../hooks/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utilities/user-services";

const linkGroups = {
  admin: [
    { href: "/dashboard", title: "Dashboard" },
    { href: "/manage-users", title: "Manage Users" },
    // ... other admin links
  ],
  user: [
    { href: "/profile", title: "Profile" },
    { href: "/settings", title: "Settings" },
    // ... other user links
  ],
  // ... other groups
  Restaurant_Admin: [
    { href: "/groups", title: "Groups" },
    { href: "/foods", title: "Foods" },
  ],
};

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  const userLinks = user ? linkGroups[user.groups] || [] : [];
  const commonLinks = [
    { href: "/", title: "Home" },
    user
      ? { href: "#", title: "Logout", onClick: handleLogout }
      : { href: "/auth", title: "Login/Signup" },
  ];

  function handleLogout() {
    logout(); // Use the logout function from user-services
    setUser(null); // Update UserContext to reflect that the user has logged out
    setIsMenuOpen(false);
    navigate("/");
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <nav className="bg-gray-800 p-4 relative">
    <nav 
      className={`${
        isSticky ? "fixed top-0 left-0 right-0 bg-white shadow-lg" : "bg-gray-800"
      } transition-all duration-300 p-4`}
    >
      <div className="container mx-auto flex items-center justify-between ">
        {/* <a href="/" className="text-xl font-bold text-white"> */}
        <a href="/" className={`${isSticky ? "text-gray-800" : "text-white"} text-xl font-bold`}>
          LunchBreak
        </a>
        <button
          // className="text-white md:hidden"
          className={`${isSticky ? "text-gray-800" : "text-white"} md:hidden`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={`absolute md:relative top-full right-0 md:flex flex-col md:flex-row w-full md:w-auto bg-gray-800 md:bg-transparent ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {commonLinks.concat(userLinks).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white p-2 border-b border-gray-700 md:border-none"
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
                setIsMenuOpen(false);
              }}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
