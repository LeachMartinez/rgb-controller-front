import axios, { AxiosResponse } from "axios"
import IDevice from "../interfaces/device";

export class DeviceApi {
  host = "http://localhost:3009";

  async getDevice(id: string): Promise<AxiosResponse> {
    return await axios.get(`${this.host}/device/${id}`);
  }
}