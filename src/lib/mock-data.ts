// Mock data for demo purposes
import { WeatherData } from "@/components/ui/weather-widget";

// Mock weather data for demo purposes
export const mockWeatherData: Record<string, WeatherData> = {
  sunny: {
    city: "Los Angeles",
    temperature: 28,
    weatherType: "clear",
    dateTime: "Wed, Feb 26, 10:30 AM",
    isDay: true
  },
  rainy: {
    city: "Seattle",
    temperature: 14,
    weatherType: "rain",
    dateTime: "Wed, Feb 26, 10:30 AM",
    isDay: true
  },
  snowy: {
    city: "Denver",
    temperature: -2,
    weatherType: "snow", 
    dateTime: "Wed, Feb 26, 10:30 AM",
    isDay: true
  },
  cloudy: {
    city: "London",
    temperature: 18,
    weatherType: "clouds",
    dateTime: "Wed, Feb 26, 6:30 PM",
    isDay: false
  },
  nightClear: {
    city: "Tokyo",
    temperature: 22,
    weatherType: "clear",
    dateTime: "Thu, Feb 27, 1:30 AM",
    isDay: false
  },
  thunderstorm: {
    city: "Miami",
    temperature: 30,
    weatherType: "thunderstorm",
    dateTime: "Wed, Feb 26, 10:30 AM",
    isDay: true
  },
  mist: {
    city: "San Francisco",
    temperature: 15,
    weatherType: "mist",
    dateTime: "Wed, Feb 26, 10:30 AM",
    isDay: true
  }
};