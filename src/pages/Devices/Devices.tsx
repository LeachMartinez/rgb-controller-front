import React from "react";

import IDevice from "../../interfaces/device";

import CreateDevice from "./CreateDevice";
import Device from "./Device";
import Button from "../../components/Button";
import "./devices.scss";

const Devices : React.FC = () => {
  const [devices, setDevices] = React.useState<IDevice[]>([]);
  const [modalShowed, setModalShowed] = React.useState<boolean>(false);
  const onAddDevice = () => {
    setModalShowed(true);
  }

  return (
    <div className="devices-wrapper">
      <div className="devices-wrapper__block">
      { devices.length > 0 ? <h2 className="devices-wrapper__title">Ваши устройства:</h2> : null }
      <div className="devices-wrapper__items">
        { devices.length > 0 ? 
          devices.map((device) => <Device device={device}/>) : null 
        }
      </div>
      <Button onClickBtn={onAddDevice} textBtn={"Добавить устройство"}/>
      </div>
      { modalShowed ? 
        <CreateDevice setDevices={setDevices} setModalShowed={setModalShowed}/> : null
      }
    </div>
  );
}

export default Devices