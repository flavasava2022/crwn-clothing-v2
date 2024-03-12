import { Fragment } from "react";
import { Outlet } from "react-router";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <h1>i am the navigation bar</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
