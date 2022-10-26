import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../assets/search.svg";

const Title = styled.h2`
  font-family: "Montserrat Bold";
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  color: #1c1c1e;
`;

const SubTitle = styled.p`
  margin: 16px 0 24px 0;

  font-family: "Montserrat Medium";

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #1c1c1e;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;

  input {
    margin-right: 24px;
    flex: 1 0;

    border: 3px solid #4f27bf;
    border-radius: 10px;

    font-family: "Montserrat Medium";

    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: #6c6c6c;

    padding-left: 20px;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 19px 40px;

  background: #4f27bf;
  border-radius: 10px;

  font-family: "Montserrat Bold";

  font-weight: 700;
  font-size: 26px;
  line-height: 32px;

  color: #ffffff;

  svg {
    margin-right: 16px;
  }
`;

const AddressesPage = () => {
  return (
    <>
      <Title>Поиск адресов</Title>
      <SubTitle>Введите интересующий вас адрес</SubTitle>

      <StyledForm>
        <input placeholder="Введите интересующий вас адрес" />
        <SearchButton>
          <SearchIcon />
          Поиск
        </SearchButton>
      </StyledForm>
    </>
  );
};

export default AddressesPage;
