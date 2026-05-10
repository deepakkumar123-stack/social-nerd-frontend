import { Route, Routes } from "react-router-dom";
import PreLoginLayoutRoute from "./@config/PreLoginLayout.routes";
import PostLoginLayoutRoutes from "./@config/PostLoginLayout.routes";

const App = () => {
  return (
    <>
      <Routes>
        {PostLoginLayoutRoutes()}
        <Route path="/" element={<PreLoginLayoutRoute />} />
        {PreLoginLayoutRoute()}
        <Route path="/" element={<PostLoginLayoutRoutes />} />
      </Routes>
    </>
  );
};

export default App;
