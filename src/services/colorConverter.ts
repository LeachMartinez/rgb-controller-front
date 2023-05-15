import ILed from "../interfaces/led";

class ColorConverter {
  static hexToRgb(hex : string) : ILed {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
      r: parseInt(result![1], 16),
      g: parseInt(result![2], 16),
      b: parseInt(result![3], 16),
      brightness: 100
    };
  }

  static HSLToRGB(h : number, s : number, l : number) : number[] {
    s /= 100;
    l /= 100;
    const k = (n : number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n : number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [255 * f(0), 255 * f(8), 255 * f(4)];
  };
}

export default ColorConverter