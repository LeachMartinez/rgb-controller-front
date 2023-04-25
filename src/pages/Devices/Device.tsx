import IDevice from "../../interfaces/device";
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
    <div>
      Устройство
      <span>MAC адрес: {device.mac}</span>
      <span>Тип устройства: {deviceType[device.type]}</span>
      <span>Количество светодиодов: {device.ledCount.toString()}</span>
    </div>
  </>
  );
}

export default Device