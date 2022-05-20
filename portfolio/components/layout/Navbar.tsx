import { useState } from "react";
import Link from "next/link";

import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

import navbar from "../../styles/navbar.module.scss";

const Navbar = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleList = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div className={navbar.mobile__wrapper}>
      <div className={navbar.menu}>
        <h2 style={{ fontWeight: "800", color: "#c471f5" }}>DDL</h2>
        {isListVisible === false ? (
          <RiMenu5Fill className={navbar.menu__icon} onClick={toggleList} />
        ) : (
          <RiCloseFill className={navbar.menu__icon} onClick={toggleList} />
        )}
      </div>
      {isListVisible ? (
        <div className={navbar.list__wrapper}>
          <ul className={navbar.mobile__navbar__list}>
            <li>
              <Link href={"/"}>HOME </Link>
            </li>
            <li>
              <Link href={"/about"}>ABOUT ME </Link>
            </li>
          </ul>
          <ul className={navbar.socials}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"
            >
              <FaLinkedin className={navbar.socials__icon} />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dndanli"
            >
              <FaGithubAlt className={navbar.socials__icon} />
            </a>
          </ul>
          <p className={navbar.copyright}>© 2022 daniel de lima </p>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
