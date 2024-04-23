import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const onClickHandler = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  };

  const navigateBlog = () => {
    navigate("/blogs");
  };

  const navigateAbout = () => {
    navigate("/about");
  };

  const navigateContact = () => {
    navigate("/contact");
  };

  const onCreateHandler = (id) => {
    navigate('/blogs/create')
  }

  const navigateBlogMobile = () => {
    navigate("/blogs");
    setIsClicked(false);
  };

  const navigateContactMobile = () => {
    navigate("/contact");
    setIsClicked(false);
  };

  const navigateAboutMobile = () => {
    navigate("/about");
    setIsClicked(false);
  };

  return (
    <>
      <header className="header container">
        <img
          className="logo"
          src="/src/assets/DadScriptWhite.svg"
          alt="site logo"
        />
        <nav>
          <ul className="header__menu">
            <li>
              <a className="header__link" onClick={navigateBlog}>
                Blog
              </a>
            </li>
            <li>
              <a className="header__link" onClick={navigateAbout}>
                About
              </a>
            </li>
            <li > {/* revert back to button-87 */}
              <a className="header__link" onClick={navigateContact}>
                Contact
              </a>
            </li>
            <li>
              <a className="button-5" onClick={onCreateHandler}>
                Create A Blog
              </a>
            </li>
          </ul>
          <button className="header__bars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={onClickHandler}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
      </header>
      {/* <-- Mobile Navigation --> */}
      <div className={isClicked ? "mobile-nav show" : "mobile-nav"}>
        <nav>
          <ul className="mobile-nav__menu">
            <li>
              <a className="mobile-nav__link" onClick={navigateAboutMobile}>
                About
              </a>
            </li>
            <li>
              <a className="mobile-nav__link" onClick={navigateBlogMobile}>
                Blog
              </a>
            </li>
            <li>
              <a className="mobile-nav__link" onClick={navigateContactMobile}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <-- End of Mobile Navigation --> */}
    </>
  );
};

export default Header;
