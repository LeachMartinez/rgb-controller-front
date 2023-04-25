import IDevice from "../../interfaces/device";

interface ICreateDeviceProps {
  setModalShowed: React.Dispatch<React.SetStateAction<boolean>>,
  setDevices: React.Dispatch<React.SetStateAction<IDevice[]>>
}

const CreateDevice : React.FC<ICreateDeviceProps> = ({setModalShowed, setDevices}) => {
  const onCreateDevice = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    set
  }

  return (
    <form onSubmit={event => onCreateDevice(event)} action="">
      MAC адрес: <input type="text" />
      Тип устройства: <input type="text" /> {/* тут радио с выбором (матрица или лента)*/}
      Количество светодиодов: <input type="number" name="" id="" />
      <button>добавить</button>
    </form>
  );
}

export default CreateDevice