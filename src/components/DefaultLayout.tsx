import styled from "styled-components";

import Header from "./Header";
// @ts-ignore
import AsideMenu from "./AsideMenu";

const Content = styled.div`
  margin-top: 80px;
  padding: 32px;
  width: 100%;
  overflow-y: scroll;
  max-height: 100vh;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <AsideMenu />
        <Content>{children}</Content>
      </div>
    </>
  );
};

export default DefaultLayout;
