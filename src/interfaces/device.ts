interface IDevice {
  id: number,
  mac: String,
  type: "deviceMatrix" | "deviceStrip",
  ledCount: Number
}

export default IDevice