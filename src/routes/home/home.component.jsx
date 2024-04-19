import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import ReducerTrail from "../../contexts/trail";

const Home = () => {
  return (
    <div>
      <ReducerTrail />
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
