import ILed from "../interfaces/led";
import ILedMode from "../interfaces/ledMode";
import ColorConverter from "./colorConverter";

class LedMode implements ILedMode{
  leds : ILed[];
  ledsCount : number;

  constructor(leds: ILed[]) {
    this.leds = leds;
    this.ledsCount = leds.length;
  }

  fadedRow(i : number, timestapValue : number) : ILed[] {
    return this.leds.map((led, index) => {
      const value = Math.pow(Math.sin(index/timestapValue + i/35), 2) * 358 + 1 + (360 / this.ledsCount);
      const [r, g, b] = ColorConverter.HSLToRGB(value, 80, 50);
      return {...led, r, g, b }
    })
  }

  faded() {

  }

  fading (i : number, timestapValue : number) : ILed[] {
    return this.leds.map(led => {
      return {...led, brightness: Math.pow(Math.sin(i/timestapValue), 2) * 100}
    })
  }

  staticLight(targetValue : string) : ILed[] {
    const rgbValue : ILed = ColorConverter.hexToRgb(targetValue);
    return this.leds.map(led => {
      return {...rgbValue, brightness: led.brightness};
    })
  }

  rainbowColor(i : number, timestapValue : number) {
    return this.leds.map(led => {
      const value = (Math.pow(Math.sin(i/timestapValue), 2) * 358) + 1;
      const [r, g, b] = ColorConverter.HSLToRGB(value, 80, 50);
      return {...led, r, g, b }
    })
  }
}

export default LedMode;