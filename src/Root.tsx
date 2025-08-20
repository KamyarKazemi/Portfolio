import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <Outlet />
    </>
  );
}

export default Root;
