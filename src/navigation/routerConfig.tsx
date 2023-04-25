import { createBrowserRouter } from "react-router-dom";
import { Devices } from "../pages/Devices";
const routerConfig = createBrowserRouter([
  {
    path: "/devices",
    element: <Devices/>,
  }
]);

export default routerConfig;