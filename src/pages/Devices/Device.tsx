import React from "react";
import RadioButton from "../../components/RadioButton";
import ILed from "../../interfaces/led";
import LedMode from "../../services/ledMode";
import "./device.scss";

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
  const ledMode = new LedMode(leds);
  const [i, setI] = React.useState(0.1);
  const [timestapValue, setTimestapValue] = React.useState(16);
  const [mode, setMode] = React.useState("staticLight");

  React.useEffect(() => {
    setTimeout(() => {
      setI(i + 0.1);
      if (mode === "fadedRow") {
        setLedColor(ledMode.fadedRow(i, timestapValue))
      }
      if (mode === "rainbowColor") {
        setLedColor(ledMode.rainbowColor(i, timestapValue))
      }
      if (mode === "fading") {
        setLedColor(ledMode.fading(i, timestapValue))
      }
    }, 16);
  }, [ledMode, mode, i, timestapValue]);

  const handleChangeColor : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLedColor(ledMode.staticLight(e.currentTarget.value));
  }
  const handleUpdateMode : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setMode(e.currentTarget.value);
  }

  const handleChamgeTimestap : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTimestapValue(+e.currentTarget.value);
  }

  const handleChanheBrightness : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLedColor((leds) => leds.map(led => {
      return {...led, brightness: +e.currentTarget.value};
    }))
  }

  return (
    <div className="device__container">
      <div className="device__top">
        <section className="device__title__wrapper">
          <h2 className="device__title__device__name">Ебобо 3000</h2>
          <div className="device__title__description">
            <span className="device__title__description__mac">MAC: 
              <span className="device__title__description__mac-name">0F:2S:f3:D5</span>
            </span>
            <span className="device__title__description__status">Статус: 
              <span className="device__title__description__status-name active">Активен</span>
            </span>
          </div>
        </section>
        <section className="led__section">
          <h2>Пример свечения ленты</h2>
          <div className="led__wrapper">
            {leds.map(item => {
              return (
                <div className="led" style={{backgroundColor: `rgb(${item.r}, ${item.g}, ${item.b})`, filter: `brightness(${item.brightness}%)`}}></div>
              )
            })}
          </div>
        </section>
      </div>
      <section className="modes">
        <h2 className="modes__title">Режимы</h2>
        <div className="modes__wrapper">
          <RadioButton name={"mode"} value={"fadedRow"} title={"Переливание цвета[2]"} handleChangeButton={handleUpdateMode}/>
          <RadioButton name={"mode"} value={"rainbowColor"} title={"Переливание цвета"} handleChangeButton={handleUpdateMode}/>
          <RadioButton name={"mode"} value={"staticLight"} title={"Статический цвет"} handleChangeButton={handleUpdateMode}/>
          <RadioButton name={"mode"} value={"fading"} title={"Затухание"} handleChangeButton={handleUpdateMode}/>
        </div>
      </section>
      <section>
        <input type="color" name="setLedColor" onChange={(e) => (handleChangeColor(e))}/>
        <input type="range" name="brightness" onChange={(e) => {handleChanheBrightness(e)}} min={0} max={100}/>
        { mode === "fading" || mode === "rainbowColor" || mode === "fadedRow" ? <input type="range" name="timestap" onChange={(e) => {handleChamgeTimestap(e)}} min={2} max={100}/> : null}
      </section>
    </div>
  );
}
export default Device;