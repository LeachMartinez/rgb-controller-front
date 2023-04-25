import IDevice from "../../interfaces/device";
import "./createDevice.scss";
interface ICreateDeviceProps {
  setModalShowed: React.Dispatch<React.SetStateAction<boolean>>,
  setDevices: React.Dispatch<React.SetStateAction<IDevice[]>>
}

const CreateDevice : React.FC<ICreateDeviceProps> = ({setModalShowed, setDevices}) => {
  const onCreateDevice = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { deviceMacAddress, deviceType, deviceLedCount } = event.currentTarget;

    const device : IDevice = {
      mac: deviceMacAddress.value,
      type: deviceType.value,
      ledCount: deviceLedCount.value
    }

    setDevices(devices => [...devices, device]);
  }

  return (
    <div className="devices-modal">
      <div className="devices-modal__wrapper">
        <h2 className="h2-title">Новое устройство</h2>
        <form onSubmit={event => onCreateDevice(event)} action="">
          MAC адрес: <input type="text" name="deviceMacAddress" />
          <div>
            <span>Тип устройства:</span>
              матрица <input type="radio" name="deviceType" value="deviceMatirx"/>
              лента <input type="radio" name="deviceType" value="deviceStrip" />
          </div>

          Количество светодиодов: <input type="number" name="deviceLedCount" min={0} />
          <button>добавить</button>
        </form>
      </div>
    </div>
  );
}

export default CreateDevice