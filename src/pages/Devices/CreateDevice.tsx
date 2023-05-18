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
    const { deviceMacAddress, deviceType, deviceLedCount, deviceName } = event.currentTarget;

    const device : IDevice = {
      id: new Date().getTime(),
      mac: deviceMacAddress.value,
      type: deviceType.value,
      ledCount: deviceLedCount.value,
      name: deviceName.value,
      active: 0
    }

    setDevices(devices => [...devices, device]);
    setModalShowed(false);
  }

  const closeModal = () => {
    setModalShowed(false);
  }

  return (
    <>
      <div className={styles.devicesModal}>
        <div className={styles.devicesModal__wrapper}>
          <h2 className="h2-title">Новое устройство</h2>
          <form onSubmit={event => onCreateDevice(event)} action="">
            <div className={styles.devicesModal__inputWrapper}>
              <Input labelText={"Название:"} id={"deviceName"} />
              <Input labelText={"MAC адрес:"} id={"deviceMacAddress"} />
              <span>Тип устройства:</span>
              <RadioButton name={"deviceType"} value={"deviceStrip"} title={"лента"}/>
              <RadioButton name={"deviceType"} value={"deviceMatrix"} title={"матрица"}/>
              <Input labelText={"Количество светодиодов:"} id={"deviceLedCount"} type={"number"} min={1}/>
            </div>
            <Button textBtn={"Добавить"}/>
            <Button textBtn={"Закрыть"} onClickBtn={closeModal}/>
          </form>
        </div>
      </div>
      <div className={styles.devicesModal__backdrop}></div>
    </>
  );
}

export default CreateDevice