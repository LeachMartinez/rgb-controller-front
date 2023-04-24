import { createBrowserRouter } from "react-router-dom";
import { Devices, Device } from "../pages/Devices";
const routerConfig = createBrowserRouter([
  {
    path: "/devices",
    element: <Devices/>,
    children: [
      {
        path: "devices/:deviceId",
        element: <Device/>,
      }
    ],
  }
]);

export default routerConfig;