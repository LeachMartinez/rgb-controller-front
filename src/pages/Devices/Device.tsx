import React from "react";
import RadioButton from "../../components/RadioButton";
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
 
  const [i, setI] = React.useState(0.1);
  const [timestapValue, setTimestapValue] = React.useState(16);
  const [mode, setMode] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setI(i + 0.1);
      if (mode === "rainbowColor") {
        setLedColor(leds => {
          // console.log(Math.pow(Math.sin(i/timestapValue), 2) * 359);
          return leds.map(led => {
            const value = (Math.pow(Math.sin(i/timestapValue), 2) * 358) + 1;
            const rgb = HSLToRGB(value, 80, 50);
            // console.log(HSLToRGB(value, 100, 40));
            return {...led, r: rgb[0], g: rgb[1], b: rgb[2]}
          })
        })
      }
      if (mode === "fading") {
        console.log(Math.pow(Math.sin(i/timestapValue), 2) * 100);
        setLedColor(leds => {
          return leds.map(led => {
            return {...led, brightness: Math.pow(Math.sin(i/timestapValue), 2) * 100}
          })
        })
      }
    }, 16);
  }, [leds, i, timestapValue]);

  const handleChangeColor : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const rgbValue : ILed = hexToRgb(e.currentTarget.value);
    setLedColor((leds) => leds.map(led => {
      return {...rgbValue, brightness: led.brightness};
    }));
  }
  const handleUpdateMode : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setMode(e.currentTarget.value);
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

  const HSLToRGB = (h : number, s : number, l : number) : number[] => {
    s /= 100;
    l /= 100;
    const k = (n : number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n : number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [255 * f(0), 255 * f(8), 255 * f(4)];
  };

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
        <span>
          <h2>Режимы</h2>
          <div className="modes__wrapper">
            <RadioButton name={"mode"} value={"rainbowColor"} title={"Переливание цвета"} handleChangeButton={handleUpdateMode}/>
            <RadioButton name={"mode"} value={"staticLight"} title={"Статический цвет"} handleChangeButton={handleUpdateMode}/>
            <RadioButton name={"mode"} value={"fading"} title={"Затухание"} handleChangeButton={handleUpdateMode}/>
          </div>
        </span>
      </section>
      <section>
        <input type="color" name="setLedColor" onChange={(e) => (handleChangeColor(e))}/>
        <input type="range" name="brightness" onChange={(e) => {handleChanheBrightness(e)}} min={0} max={100}/>
        { mode === "fading" || mode === "rainbowColor" ? <input type="range" name="timestap" onChange={(e) => {handleChamgeTimestap(e)}} min={2} max={20}/> : null}
      </section>
      <section>
        values:
        <div>x = {i}</div>
        <div>timestap = {timestapValue}</div>
        <div>formula = Math.pow(Math.sin(i/timestapValue), 2) * 100</div>
      </section>
    </div>
  );
}
export default Device;