import ILed from "./led";

interface ILedMode {
  fadedRow: Function
  fading: Function
  staticLight: Function
  rainbowColor: Function
  impulse: Function
  leds: ILed[]
  ledsCount: number
  changeBrightness: Function
}

export default ILedMode;