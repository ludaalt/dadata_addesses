import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as MainLogo } from "../assets/logo.svg";
import { ReactComponent as UserIcon } from "../assets/person.svg";

const StyledHeader = styled.header`
  background-color: #4f27bf;
  padding: 15px 30px;

  display: flex;
  justify-content: space-between;
`;

const UserBlock = styled.div`
  font-family: "Montserrat Bold";
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  display: flex;
  align-items: center;

  div {
    margin-left: 16px;
  }
`;

const Header = () => {
  const [currentUser, setCurrentUser] = useState("Имя Фамилия");
  return (
    <StyledHeader>
      <a href="/">
        <MainLogo />
      </a>
      <UserBlock>
        <UserIcon />
        <div>{currentUser}</div>
      </UserBlock>
    </StyledHeader>
  );
};

export default Header;
