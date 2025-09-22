// Import the custom Axios instance
import { AxiosResponse } from "axios";
import api from "./axios";
import { ListOfCharacters } from "../entities/Character";

export default class CharactersApi {

  static getCharacters(): Promise<AxiosResponse<ListOfCharacters>>  {
    return api.get("/character");
  }
}
