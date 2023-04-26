import IDevice from "../../interfaces/device";
import styles from "./createDevice.module.scss";

import Input from "../../components/Input";
import Button from "../../components/Button";
import RadioButton from "../../components/RadioButton";
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
    <>
      <div className={styles.devicesModal}>
        <div className={styles.devicesModal__wrapper}>
          <h2 className="h2-title">Новое устройство</h2>
          <form onSubmit={event => onCreateDevice(event)} action="">
            <div className={styles.devicesModal__inputWrapper}>
              <Input labelText={"MAC адрес:"} id={"deviceMacAddress"} />
              <span>Тип устройства:</span>
              <RadioButton name={"deviceType"} value={"deviceStrip"} title={"лента"}/>
              <RadioButton name={"deviceType"} value={"deviceMatirx"} title={"матрица"}/>
              <Input labelText={"Количество светодиодов:"} id={"deviceLedCount"} type={"number"} min={1}/>
            </div>
            <Button textBtn={"Добавить"}/>
          </form>
        </div>
      </div>
      <div className={styles.devicesModal__backdrop}></div>
    </>
  );
}

export default CreateDevice