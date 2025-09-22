import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// This is the base URL for the API Eg. https://dischemapi.com/api/v1
const baseUrl = "https://rickandmortyapi.com/api/";

// Create a custom Axios instance
const api = axios.create({
  baseURL: baseUrl,
});

// Add a request interceptor to automatically add the Authorization header
api.interceptors.request.use(async (config) => {
  try {
    const accessToken = await AsyncStorage.getItem("access_token");

    // If a token exists, add it to the Authorization header
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  } catch (error) {
    // Handle any potential AsyncStorage errors
    console.error("Failed to retrieve access token from AsyncStorage", error);
  }

  return config;
});

export default api;
