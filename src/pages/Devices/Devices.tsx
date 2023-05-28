import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

import IDevice from "../../interfaces/device";

import Button from "../../components/Button";

import "./devices.scss";

enum deviceType {
  "deviceMatrix" = "Матрица",
  "deviceStrip" = "Лента"
}

const Devices : React.FC = () => {
  const data = useLoaderData() as IDevice[];
  const [devices, setDevices] = React.useState<IDevice[]>([]);

  useEffect(() => {
    setDevices(data);
  }, [data]);

  return (
    <div className="devices-wrapper">
      { devices.length > 0 ? 
        <div className="devices-wrapper__block">
          <h2 className="devices-wrapper__title">Ваши устройства:</h2>
          <div className="devices-wrapper__items">
            {devices.map((device) => {
              return (
                <Link to={`/device/${device.id}`} className="deviceItem__wrapper">
                  <div className="deviceItem">
                    <h2 className="deviceItem__title">{device.name}</h2>
                    <span className="deviceItem__desc">MAC: {device.mac}</span>
                    <span className="deviceItem__desc">Тип: {deviceType[device.type]}</span>
                    <span className="deviceItem__desc">светодиодов: {device.ledCount.toString()} шт.</span>
                  </div>
                </Link>
              )
            })} 
          </div>
        </div> : null 
      }
    </div>
  );
}

export default Devices