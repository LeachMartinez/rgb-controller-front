import IDevice from "../../interfaces/device";

interface ICreateDeviceProps {
  setModalShowed: React.Dispatch<React.SetStateAction<boolean>>,
  setDevices: React.Dispatch<React.SetStateAction<IDevice[]>>
}

const CreateDevice : React.FC<ICreateDeviceProps> = ({setModalShowed, setDevices}) => {
  return (
  <>
    
  </>
  );
}

export default CreateDevice