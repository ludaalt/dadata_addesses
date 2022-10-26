import { NavLink } from "react-router-dom";
import styled from "styled-components";

import navigationConfig from "../configs/NavigationConfig";
// @ts-ignore
import MenuItem from "./MenuItem.tsx";

const StyledMenu = styled.div`
  padding-top: 25px;
  min-width: 300px;
  width: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .activeLink {
    li {
      border-right: 3px solid #4f27bf;
    }
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

const AsideMenu = () => {
  return (
    <StyledMenu>
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
  );
};

export default AsideMenu;
