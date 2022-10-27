import styled from "styled-components";

import data from "../data/data";
import { textConversion } from "../utils/textConversion";
import BlockTitle from "../components/BlockTitle";

const NewsText = styled.div`
  font-family: "Montserrat Medium";

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const HomePage = () => {
  return (
    <>
      <BlockTitle title="Новости" />
      <NewsText
        dangerouslySetInnerHTML={{ __html: textConversion(data) }}
      ></NewsText>
    </>
  );
};

export default HomePage;
