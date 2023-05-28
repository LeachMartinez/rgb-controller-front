import ILed from "../interfaces/led";
import ILedMode from "../interfaces/ledMode";
import ColorConverter from "./colorConverter";
import ModeApi from "../api/modeApi";
class LedMode implements ILedMode {

  leds : ILed[];
  ledsCount : number;

  private validData = {
    deviceId: 0,
    data: {},
    errors: []
  }

  constructor(leds: ILed[]) {
    this.leds = leds;
    this.ledsCount = leds.length;
  }

  fadedRow(i : number, timestapValue : number) : ILed[] {
    return this.leds.map((led, index) => {
      // TODO: Упростить выражение по-возможности
      const value = Math.pow(Math.sin(index/timestapValue + i/35), 2) * 358 + 1 + (360 / this.ledsCount);
      const [r, g, b] = ColorConverter.HSLToRGB(value, 80, 50);
      return {...led, r, g, b }
    })
  }

  impulse(j: number) : ILed[] {
    const impulseTailSize: number = 11;
    let newLeds = this.leds;
    let brightness = 100;

    newLeds = this.leds.map(led => {
      return {...led, brightness: 0}
    });

    for (let i = 0; i < impulseTailSize; i++) {
      if (this.ledsCount - (j - i) > 0) { 
        newLeds[j - i] = {...this.leds[j], brightness: brightness}
      }
      brightness = brightness - 10;
    }
    
    return newLeds;
  }

  fading(i : number, timestapValue : number) : ILed[] {
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

  changeBrightness(brightness : number) {
    return this.leds.map(led => {
      return {...led, brightness: brightness};
    })
  }

  sendMode(deviceId: number, data: {}) : Array<string> {
    this.validData.data = data;
    this.validData.deviceId = deviceId;
    this.validate();

    if (this.validData.errors.length === 0) {
      new ModeApi().sendMode(deviceId, data);
    }

    return this.validData.errors;
  }

  private validate() {
    this.validData = {...this.validData, errors: []}
  }
}

export default LedMode;