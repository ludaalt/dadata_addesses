import { useState } from "react";
import styled from "styled-components";

import ExpandMenuIcon from "../assets/expand-menu.svg";

const StyledMenuItem = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  font-family: "Montserrat Semibold";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1c1c1e;

  li {
    margin-left: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const ExpandButton = styled.button<{ expand: boolean }>`
  cursor: pointer;
  padding: 10px;
  position: absolute;
  content: "";
  top: calc((100% - 25px) / 2);
  right: 20px;
  width: 25px;
  height: 25px;
  border: none;
  background: none;

  background-image: url(${ExpandMenuIcon});
  background-repeat: no-repeat;
  background-position: center;

  transform: ${(props) =>
    props?.expand ? "rotate(0deg)" : "rotate(180deg)"}; ;
`;

const MenuItem = ({ item }: any) => {
  const [isMenuExpand, setIsMenuExpand] = useState(true);
  return (
    <>
      <StyledMenuItem>
        <img src={item.icon} alt={item.title} width={32} height={32} />
        <li key={item.key}>{item.title}</li>
        {item.submenu.length > 0 && (
          <ExpandButton
            expand={isMenuExpand}
            onClick={() => setIsMenuExpand((state): boolean => !state)}
          />
        )}
      </StyledMenuItem>

      {item.submenu.length !== 0 && (
        <ul style={{ marginLeft: "40px" }}>
          {isMenuExpand &&
            item.submenu.map((submenuItem): any => (
              <MenuItem item={submenuItem} />
            ))}
        </ul>
      )}
    </>
  );
};

export default MenuItem;
