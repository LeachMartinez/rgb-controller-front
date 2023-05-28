import axios from "axios"

class ModeApi {
  host = "http://localhost:3009";

  async sendMode(deviceId: number, modeData: {}) {
    axios.post(`${this.host}/mode/${deviceId}`, modeData)
  }
}

export default ModeApi;