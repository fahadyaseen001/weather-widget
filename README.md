# Weather Widget - Powered By ShadCN/UI

A beautiful, customizable weather widget component that integrates seamlessly with shadcn/ui. It displays current weather information along with current location , date & time based on the user's location using the OpenWeatherMap API.

## Features

-  Real-time weather data via OpenWeather API
- Automatic geolocation detection
- Animated weather icons based on conditions
- Day/night mode support
- Automatic refresh at configurable intervals
- Responsive design
- Accessibility features for screen readers
- Optional mock data mode for testing

## Installation
Install the package
```bash
npm install @fahadyaseen001/weather-widget
```
Or using yarn
```bash
yarn add @fahadyaseen001/weather-widget
```
## Dependencies
This component requires:

- React 18+
- Next.js 14+ (App Router)
- Lucide React for icons
- Framer Motion for animations
- OpenWeather API key (unless using mock data)

Make sure these dependencies are installed in your project.

## Usage
### Basic Usage
```typescript
import { WeatherWidget } from "@/components/ui/weather-widget";

export default function MyPage() {
  return (
    <WeatherWidget 
      apiKey="your-openweather-api-key-here" 
    />
  );
}
```
### With All Props
```typescript
import { WeatherWidget } from "@/components/ui/weather-widget";

export default function MyPage() {
  return (
    <WeatherWidget 
      apiKey={process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}
      width="20rem"
      refreshInterval={300000} // 5 minutes
      animated={true}
      className="my-custom-class shadow-lg"
      location={{ latitude: 40.7128, longitude: -74.0060 }} // New York
      onWeatherLoaded={(data) => console.log("Weather loaded:", data)}
      onError={(error) => console.error("Weather error:", error)}
    />
  );
}
```
### Using Mock Data
If you want to test the widget without making API calls:
```typescript
import { WeatherWidget, WeatherData } from "@/components/ui/weather-widget";

export default function MockWeatherDemo() {
  // Custom fetch function that returns mock data
  const mockFetch = async (): Promise<WeatherData> => {
    return {
      city: "Mock City",
      temperature: 25,
      weatherType: "clear",
      dateTime: "Thu, Feb 27, 12:00 PM",
      isDay: true
    };
  };

  return (
    <WeatherWidget 
      onFetchWeather={mockFetch}
    />
  );
}

```


## Props


```
```
 

| Prop | Type     | Default | Description |
| :---| :------- | :----- | :------------------------- |
|`apiKey`|`string`|`undefined`|OpenWeather API key (required unless `onFetchWeather` is provided)|
|`onFetchWeather`|`(lat: number, lng: number) => Promise<WeatherData>`|`undefined`|Custom function to fetch weather data|
|`refreshInterval`|`number`|`9000`|Time in milliseconds between automatic refreshes|
|`width`|`string`|`"16rem"`|Width of the widget|
|`location`|`{ latitude: number, longitude: number }`|`undefined`|Custom coordinates (uses browser geolocation if not provided)|
|`className`|`string`|`""`|Additional CSS classes to apply to the widget|
|`onWeatherLoaded`|`(data: WeatherData) => void`|`undefined`|Callback when weather data is loaded|
|`onError`|`(error: string) => void`|`undefined`| Callback when an error occurs|
|`animated`|`boolean`|`true`|Enable/disable animations|



## `WeatherData` Interface


```typescript
interface WeatherData {
  city: string;
  temperature: number;
  weatherType: 'clear' | 'clouds' | 'rain' | 'snow' | 'thunderstorm' | 'mist' | 'unknown';
  dateTime: string;
  isDay: boolean;
}
```

## OpenWeather API Information
This widget uses the OpenWeather API to fetch current weather data. You will need to:

- Create an account at OpenWeatherMap
- Get your API key from the dashboard
- Pass it to the widget via the `apiKey` prop or as an environment variable

The widget uses the following API endpoint:
```bash
https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric
```    

## Error Handling
The widget handles various error scenarios:

- Invalid API key (401)
- Location not found (404)
- API call limit exceeded (429)
- Location access denied
- Geolocation unavailable
- Network errors

Errors are displayed to the user with a "Try Again" button and passed to the `onError` callback if provided.

## Accessibility
The widget includes the following accessibility features:

- Semantic HTML structure
- ARIA labels and roles
- Screen reader announcements for weather updates
- Keyboard navigation support
- High contrast color combinations

## Customization
### Styling
The widget uses Tailwind CSS for styling. You can customize its appearance by:

- Passing a custom `className` prop
- Modifying the component's CSS variables
- Overriding the Tailwind classes in your project

## Custom Weather Fetching
You can provide your own weather data by implementing the `onFetchWeather` prop:
```typescript
const fetchCustomWeather = async (lat: number, lng: number) => {
  // Your custom logic to fetch weather data
  const response = await fetch(`your-weather-api-url?lat=${lat}&lng=${lng}`);
  const data = await response.json();
  
  // Transform to match WeatherData interface
  return {
    city: data.location.name,
    temperature: data.current.temp_c,
    weatherType: mapToWeatherType(data.current.condition.code),
    dateTime: new Date().toLocaleString(),
    isDay: data.current.is_day === 1
  };
};

<WeatherWidget onFetchWeather={fetchCustomWeather} />
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/fahadyaseen001/weather-widget
```

Go to the project directory

```bash
  cd weather-widget
```

Install dependencies

```bash
  npm install
```

Create a `.env.local` file with your OpenWeather API key

```bash 
NEXT_PUBLIC_OPENWEATHER_API_KEY=your-api-key-here
```

Start the server

```bash
  npm run dev 
```
Then navigate to `http://localhost:3000 `to see the widget in action.

## Demo

[demo.zip](https://github.com/user-attachments/files/18999620/demo.zip)

## Screenshots

[screenshots.zip](https://github.com/user-attachments/files/18999752/screenshots.zip)

## License 

[MIT](https://github.com/fahadyaseen001/weather-widget/blob/main/LICENSE)


## Support 

For support, give the repo a star ⭐


## Feedback 

If you have any feedback, please reach out to us at fahadyaseen102@gmail.com 💌

