import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import navigationConfig from "../configs/NavigationConfig";
// @ts-ignore
import MenuItem from "./MenuItem.tsx";

const BORDERLINE_SCREEN_WIDTH = 768;

const StyledMenu = styled.div`
  margin-top: 80px;
  padding-top: 25px;
  min-width: 300px;
  width: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .activeLink {
    li {
      border-right: 3px solid #4f27bf;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    background-color: #fff;
  }
`;

const MenuTitle = styled.h3`
  padding-left: 30px;
  padding-bottom: 30px;
  font-family: "Montserrat Bold";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #1c1c1e;
`;

const OpenMenuButton = styled.button`
  border: none;
  background: none;
  width: 20px;
  height: 20px;

  position: absolute;
  margin-top: 100px;
`;

const AsideMenu = () => {
  const [isMenuShown, setIsMenuShown] = useState(
    window.innerWidth > BORDERLINE_SCREEN_WIDTH
  );

  const menu = useRef(null);

  useEffect(() => {
    const hideMenu = () => {
      window.innerWidth > BORDERLINE_SCREEN_WIDTH
        ? setIsMenuShown(true)
        : setIsMenuShown(false);
    };

    const handleOutsideClick = (event) => {
      if (isMenuShown && menu.current && !menu.current.contains(event.target)) {
        setIsMenuShown(false);
      }
    };

    window.addEventListener("resize", hideMenu);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("resize", hideMenu);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuShown]);

  return isMenuShown ? (
    <StyledMenu ref={menu}>
      <MenuTitle>Меню</MenuTitle>
      <ul>
        {navigationConfig.map((item) => (
          <NavLink
            to={`${item.path}`}
            key={item.key}
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            end
          >
            <MenuItem key={item.key} item={item} />
          </NavLink>
        ))}
      </ul>
    </StyledMenu>
  ) : (
    <OpenMenuButton onClick={() => setIsMenuShown((oldState) => !oldState)}>
      <MenuTitle>Меню</MenuTitle>
    </OpenMenuButton>
  );
};

export default AsideMenu;
