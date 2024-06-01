import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const onClickHandler = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  };

  const onClickNavigation = (e) => {
    navigate(`/${e.target.name}`);
    setIsClicked(false);
  };

  return (
    <>
      <header className="header container">
        <img className="logo" src="/DadScriptWhite.svg" alt="site logo" />
        <nav>
          <ul className="header__menu">
            <li>
              <a
                className="header__link"
                name=""
                onClick={(e) => onClickNavigation(e)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="header__link"
                name="Blogs"
                onClick={(e) => onClickNavigation(e)}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="header__link"
                name="About"
                onClick={(e) => onClickNavigation(e)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="header__link"
                name="Portfolio"
                onClick={(e) => onClickNavigation(e)}
              >
                Portfolio
              </a>
            </li>
            <span>
              <a
                className="header__link button-87"
                name="Contact"
                onClick={(e) => onClickNavigation(e)}
              >
                Contact
              </a>
            </span>
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
              <a
                className="mobile-nav__link"
                name=""
                onClick={(e) => onClickNavigation(e)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="mobile-nav__link"
                name="About"
                onClick={(e) => onClickNavigation(e)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="mobile-nav__link"
                name="Portfolio"
                onClick={(e) => onClickNavigation(e)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="mobile-nav__link"
                name="Blogs"
                onClick={(e) => onClickNavigation(e)}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="mobile-nav__link"
                name="Contact"
                onClick={(e) => onClickNavigation(e)}
              >
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
