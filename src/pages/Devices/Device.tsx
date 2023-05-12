import React from "react";
import "./device.scss";
interface ILed {
  r: number,
  g: number,
  b: number,
  brightness: number | 100
}

const Device : React.FC = () => {
  const [leds, setLedColor] = React.useState<ILed[]>([{
    r: Math.round(255),
    g: Math.round(Math.random() * 255),
    b: Math.round(255),
    brightness: 100
  },{
    r: Math.round(255),
    g: Math.round(Math.random() * 255),
    b: Math.round(255),
    brightness: 100
  },{
    r: Math.round(255),
    g: Math.round(Math.random() * 255),
    b: Math.round(255),
    brightness: 100
  },{
    r: Math.round(255),
    g: Math.round(Math.random() * 255),
    b: Math.round(255),
    brightness: 100
  },{
    r: Math.round(255),
    g: Math.round(Math.random() * 255),
    b: Math.round(255),
    brightness: 100
  },{
    r: Math.round(255),
    g: Math.round(Math.random() * 255),
    b: Math.round(255),
    brightness: 100
  },{
    r: Math.round(255),
    g: Math.round(Math.random() * 255),
    b: Math.round(255),
    brightness: 100
  }]); 
  const [i, setI] = React.useState(1.0);
  const [timestapValue, setTimestapValue] = React.useState(16);

  React.useEffect(() => {
    setTimeout(() => {
      console.log(Math.pow(Math.sin(i), 2) * 100);
      
      setI(i + 0.1);
      setLedColor(leds => {
        return leds.map(led => {
          return {...led, brightness: Math.pow(Math.sin(i), 2) * 100}
        })
      })
    }, timestapValue);
  }, [leds, i, timestapValue]);

  const handleChangeColor : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const rgbValue : ILed = hexToRgb(e.currentTarget.value);
    setLedColor((leds) => leds.map(led => {
      return {...rgbValue, brightness: led.brightness};
    }));
  }

  const handleChamgeTimestap : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const timestapValue = +e.currentTarget.value;
    setTimestapValue(timestapValue);
  }

  const handleChanheBrightness : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const brightnessValue = +e.currentTarget.value;
    
    setLedColor((leds) => leds.map(led => {
      return {...led, brightness: brightnessValue};
    }))
  }

  const hexToRgb = (hex : string) : ILed => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
      r: parseInt(result![1], 16),
      g: parseInt(result![2], 16),
      b: parseInt(result![3], 16),
      brightness: 100
    };
  }
  return (
    <div>
      <section>
        <h2>Устройство:</h2>
        <div>
          <span>MAC:</span>
          <span>Статус:</span>
        </div>
      </section>
      <section>
        <div className="led__wrapper">
          {leds.map(item => {
            return (
              <div className="led" style={{backgroundColor: `rgb(${item.r}, ${item.g}, ${item.b})`, filter: `brightness(${item.brightness}%)`}}></div>
            )
          })}
        </div>
      </section>
      <section>
        <input type="color" name="setLedColor" onChange={(e) => (handleChangeColor(e))}/>
        <input type="range" name="brightness" onChange={(e) => {handleChanheBrightness(e)}} min={0} max={100}/>
        <input type="range" name="timestap" onChange={(e) => {handleChamgeTimestap(e)}} min={100} max={300}/>
      </section>
    </div>
  );
}
export default Device;