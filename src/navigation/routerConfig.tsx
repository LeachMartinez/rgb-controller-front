import { createBrowserRouter } from "react-router-dom";
import { Devices } from "../pages/Devices";
import { Device } from "../pages/Devices/Device";
import IDevice from "../interfaces/device";
import { DeviceApi } from "../api/deviceApi";
const routerConfig = createBrowserRouter([
  {
    path: "/devices",
    element: <Devices/>
  },
  {
    path: "/devices/:id",
    element: <Device/>,
    loader: async ({ params }) : Promise<IDevice | ""> => {
      return params.id ? (await new DeviceApi().getDevice(params.id)).data : "";
    }
  }
]);

export default routerConfig;