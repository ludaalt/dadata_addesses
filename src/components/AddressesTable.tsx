import styled from "styled-components";
import BlockTitle from "./BlockTitle";

const StyledAddressesTable = styled.div`
  margin-top: 32px;
  padding: 24px;
`;

const AddressItem = styled.li`
  padding: 16px 0;
  border-top: 1px solid #d7d7d7;
  font-family: "Montserrat Medium";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const AddressesTable = ({ data }) => {
  return (
    <StyledAddressesTable>
      <BlockTitle title="Адреса" />
      <ul>
        {data &&
          data.map((address) => (
            <AddressItem>{address.unrestricted_value}</AddressItem>
          ))}
      </ul>
    </StyledAddressesTable>
  );
};

export default AddressesTable;
