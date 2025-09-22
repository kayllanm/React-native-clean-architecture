// Import the custom Axios instance
import { AxiosResponse } from "axios";
import { ListOfEpisodes } from "../entities/Episode";
import api from "./axios";

export default class EpisodesApi {

  static getEpisodes(): Promise<AxiosResponse<ListOfEpisodes>> {
    return api.get("/episode");
  }
}
