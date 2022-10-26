import Header from "./Header";
import AsideMenu from "./AsideMenu";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <AsideMenu />

        <div style={{ padding: "32px", width: "100%" }}></div>
      </div>
    </>
  );
};

export default DefaultLayout;
