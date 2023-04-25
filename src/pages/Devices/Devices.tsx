import React from "react";
import IDevice from "../../interfaces/device";
import CreateDevice from "./CreateDevice";

const Devices : React.FC = () => {
  const [devices, setDevices] = React.useState<IDevice[]>([]);
  const [modalShowed, setModalShowed] = React.useState<boolean>(false);
  const onAddDevice = () => {
    setModalShowed(true);
  }

  return (
    <>
      <span>Ваши устройства:</span>
      { devices.map(device => <div><span>Устройство</span></div>) }
      <button onClick={onAddDevice}>Добавить устройство</button>
      { 
        modalShowed ? 
        <div>
          <CreateDevice
            setDevices={setDevices}
            setModalShowed={setModalShowed}
          />
        </div> :
        null
      }
    </>
  );
}

export default Devices