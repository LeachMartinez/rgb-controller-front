import ILed from "../../interfaces/led";
import React from "react";

import LedMode from "../../services/ledMode";

interface IPropsDeviceTapeTemplate {
  ledCount: number
  mode: string
}

const allowSettings = {
  changeTimestamp: ["fading", "rainbowColor", "fadedRow", "impulse"],
  changeColor: ["fading", "rainbowColor", "fadedRow", "impulse", "staticLight"],
  changeBrightness: ["fading", "rainbowColor", "fadedRow", "impulse", "staticLight"]
}


export const DeviceTapeTemplate : React.FC<IPropsDeviceTapeTemplate>  = ({ledCount, mode}) => {
  const [leds, setLeds] = React.useState<ILed[]>([]);
  const [timeLine, setTimeLine] = React.useState(0.1);
  const [timestapValue, setTimestapValue] = React.useState(16);
  const [currentLedCount, setCurrentLedCount] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {});
  });

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
      setCurrentLedCount(currentLedCount => currentLedCount === ledCount + 12 ? currentLedCount = 0 : currentLedCount = currentLedCount + 1);
      
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
        setLeds(ledMode.impulse(currentLedCount));
      }
    }, 16);
  }, [ledMode, mode, timeLine, currentLedCount, ledCount,timestapValue]);

  const handleChamgeTimestap : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTimestapValue(+e.currentTarget.value);
  }

  const handleChangeColor : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLeds(ledMode.staticLight(e.currentTarget.value));
  }

  const handleChanheBrightness : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLeds(ledMode.changeBrightness(+e.currentTarget.value))
  }

  return (
    <>
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

      <section>
        <h2>Настройки режима</h2>
        { allowSettings.changeColor.includes(mode) ? <input type="color" name="setLedColor" onChange={(e) => (handleChangeColor(e))}/> : null}
        { allowSettings.changeBrightness.includes(mode) ? <input type="range" name="brightness" onChange={(e) => {handleChanheBrightness(e)}} min={0} max={100}/> : null}
        { allowSettings.changeTimestamp.includes(mode) ? <input type="range" name="timestap" onChange={(e) => {handleChamgeTimestap(e)}} min={2} max={100}/> : null}
      </section>
    </>
  )
}