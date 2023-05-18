interface IDevice {
  id: number;
  mac: string;
  type: "deviceMatrix" | "deviceStrip";
  ledCount: number;
  name: string;
  active: 0 | 1;
}

export default IDevice