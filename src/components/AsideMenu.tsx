import styled from "styled-components";

import navigationConfig from "../configs/NavigationConfig";
// @ts-ignore
import MenuItem from "./MenuItem.tsx";

const StyledMenu = styled.ul`
  padding-top: 25px;
  max-width: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
      {navigationConfig.map((menu) => (
        <MenuItem item={menu} />
      ))}
    </StyledMenu>
  );
};

export default AsideMenu;
