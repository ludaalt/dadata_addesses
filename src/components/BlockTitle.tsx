import styled from "styled-components";

const Title = styled.h2`
  margin-bottom: 16px;
  font-family: "Montserrat Bold";
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  color: #1c1c1e;
`;

const BlockTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default BlockTitle;
