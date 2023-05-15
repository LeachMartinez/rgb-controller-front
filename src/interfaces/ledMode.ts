import ILed from "./led";

interface ILedMode {
  fadedRow: Function,
  faded: Function,
  fading: Function,
  staticLight: Function,
  rainbowColor: Function,
  leds: ILed[],
  ledsCount: number
}

export default ILedMode;