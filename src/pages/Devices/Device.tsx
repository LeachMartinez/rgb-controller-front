import IDevice from "../../interfaces/device";
import "./device.scss";
interface IDeviceProp {
  device: IDevice
}

enum deviceType {
  "deviceMatrix" = "Матрица",
  "deviceStrip" = "Лента"
}

const Device : React.FC<IDeviceProp> = ({device}) => {
    
  return (
  <>
    <div className="device">
      <span>MAC: {device.mac}</span>
      <span>Тип: {deviceType[device.type]}</span>
      <span>светодиодов: {device.ledCount.toString()} шт.</span>
    </div>
  </>
  );
}

export default Device