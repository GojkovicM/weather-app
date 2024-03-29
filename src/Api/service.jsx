import axios from "axios";
import { useContext } from "react";

const apiKey = "8f9e5c3adf52c556fa34ab5521eede58";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=${apiKey}`;
const geoApyKey = "085f25760e124a5ab373eca9d2e83634";
const geoApyUrl =
  "https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}";

export const fetchWeather = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchWeekWeather = async (city) => {
  
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocation = async (latitude, longitude) => {
  try {
    const res = await axios.get(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${geoApyKey}`
    );

    return res.data.features[0].properties;
  } catch (error) {
    console.log(error);
  }
};
