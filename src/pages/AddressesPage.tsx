import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { getData } from "../utils/getData";
// @ts-ignore
import AddressesTable from "../components/AddressesTable.tsx";
import BlockTitle from "../components/BlockTitle";

const SubTitle = styled.p`
  margin-bottom: 24px;
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

    padding: 20px;
  }

  @media (max-width: 1030px) {
    flex-direction: column;

    input {
      margin-right: 0px;
    }

    button {
      margin-top: 20px;
      margin-right: auto;
    }
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

const Error = styled.p`
  color: red;
`;

const AddressesPage = () => {
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [addresses, setAddresses] = useState<any>([]);

  const submitHandle = (e) => {
    e.preventDefault();
    if (inputValue.length < 3) {
      setError("Минимальная длина ввода в поле ввода адреса - 3 символа");
      return;
    }

    getData(inputValue).then((result) => setAddresses(result));
  };

  return (
    <>
      <BlockTitle title="Поиск адресов" />
      <SubTitle>Введите интересующий вас адрес</SubTitle>

      <StyledForm onSubmit={submitHandle}>
        <input
          placeholder="Введите интересующий вас адрес"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchButton>
          <SearchIcon />
          Поиск
        </SearchButton>
      </StyledForm>

      {error && <Error>{error}</Error>}

      {addresses.length > 0 && <AddressesTable data={addresses.suggestions} />}
    </>
  );
};

export default AddressesPage;
