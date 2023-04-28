interface IDevice {
  id: number,
  mac: string,
  type: "deviceMatrix" | "deviceStrip",
  ledCount: number,
  name: string
}

export default IDevice