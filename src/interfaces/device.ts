interface IDevice {
  mac: String,
  type: "deviceMatrix" | "deviceStrip",
  ledCount: Number
}

export default IDevice