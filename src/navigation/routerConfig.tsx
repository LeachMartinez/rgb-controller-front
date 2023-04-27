import { createBrowserRouter } from "react-router-dom";
import { Devices } from "../pages/Devices";
import Device from "../pages/Devices/Device";
const routerConfig = createBrowserRouter([
  {
    path: "/devices",
    element: <Devices/>,
    children: [
      {
        path: ":id",
        element: <Device/>
      }
    ]
  }
]);

export default routerConfig;