import ILed from "../../interfaces/led";
import React from "react";

import LedMode from "../../services/ledMode";
import Button from "../../components/Button";
interface IPropsDeviceTapeTemplate {
  ledCount: number
  mode: string
  deviceId: number
}

const allowSettings = {
  changeTimestamp: ["fading", "rainbowColor", "fadedRow", "impulse"],
  changeColor: ["fading", "impulse", "staticLight"],
  changeBrightness: ["fading", "rainbowColor", "fadedRow", "impulse", "staticLight"]
}

export const DeviceTapeTemplate : React.FC<IPropsDeviceTapeTemplate>  = ({ledCount, mode, deviceId}) => {
  const [leds, setLeds] = React.useState<ILed[]>([]);
  const [timeLine, setTimeLine] = React.useState(0.1);
  const [timestapValue, setTimestapValue] = React.useState(16);
  const [currentLedPos, setcurrentLedPos] = React.useState(0);

  React.useEffect(() => {
    setLeds(() => {
      let currentLeds: ILed[] = [];
      while (currentLeds.length !== ledCount) {
        currentLeds.push({
          r: 255,
          g: 255,
          b: 255,
          brightness: 100
        })
      }
      return currentLeds;
    })
  }, [ledCount]);

  const ledMode = new LedMode(leds);

  React.useEffect(() => {
    setTimeout(() => {
      setTimeLine(timeLine + 0.1);
      setcurrentLedPos(currentLedPos => currentLedPos === ledCount + 12 ? currentLedPos = 0 : currentLedPos = currentLedPos + 1);
      
      if (mode === "fadedRow") {
        setLeds(ledMode.fadedRow(timeLine, timestapValue))
      }
      if (mode === "rainbowColor") {
        setLeds(ledMode.rainbowColor(timeLine, timestapValue))
      }
      if (mode === "fading") {
        setLeds(ledMode.fading(timeLine, timestapValue))
      }
      if (mode === "impulse") {
        setLeds(ledMode.impulse(currentLedPos));
      }
    }, 16);
  }, [ledMode, mode, timeLine, currentLedPos, ledCount,timestapValue]);

  const handleChamgeTimestap : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTimestapValue(+e.currentTarget.value);
  }

  const handleChangeColor : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLeds(ledMode.staticLight(e.currentTarget.value));
  }

  const handleChanheBrightness : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLeds(ledMode.changeBrightness(+e.currentTarget.value))
  }

  const handleSubmitMode : React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const {color, brightness, timestamp} = e.currentTarget;
    ledMode.sendMode(deviceId, {color, brightness, timestamp, mode});
  }

  return (
    <>
      <section className="led__section">
        <h2>Пример свечения ленты</h2>
        <div className="led__wrapper">
          {leds.map(item => {
            return (
              <div 
                className="led" 
                style={{backgroundColor: `rgb(${item.r}, ${item.g}, ${item.b})`, filter: `brightness(${item.brightness}%)`}}
              ></div>
            )
          })}
        </div>
      </section>

      <section>
        <h2>Настройки режима</h2>
        <form action="" onSubmit={handleSubmitMode}>
          { allowSettings.changeColor.includes(mode) && <input type="color" id="color" onChange={(e) => (handleChangeColor(e))}/> }
          { allowSettings.changeBrightness.includes(mode) && <input type="range" id="brightness" onChange={(e) => {handleChanheBrightness(e)}} min={0} max={100}/> }
          { allowSettings.changeTimestamp.includes(mode) && <input type="range" id="timestamp" onChange={(e) => {handleChamgeTimestap(e)}} min={2} max={100}/> }
          <Button className="modes" textBtn="Отправить" />
        </form>
      </section>
    </>
  )
}