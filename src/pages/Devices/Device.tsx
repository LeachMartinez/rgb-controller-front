import React from "react";

const Device : React.FC = () => {
  const [devices, setDevices] = React.useState([]);

  return (
  <>
     <span>Ваши устройства:</span>
     {
      devices.map(device => {
        <div><span>Устройство</span></div>
      })
     }
     <button>Добавить устройство</button>
  </>
  );
}

export default Device