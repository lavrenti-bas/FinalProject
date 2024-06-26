import React, { useEffect } from "react";
import RoutesComponent from "./routes/RoutesComponent";
import { useDispatch } from "react-redux";
import { fetchHomePageProducts } from "./redux/slices";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageProducts());
  }, [dispatch]);

  return (
    <div>
      <RoutesComponent />
    </div>
  );
};

export default App;
