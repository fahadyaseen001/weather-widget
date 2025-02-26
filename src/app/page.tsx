'use client'

import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { WeatherData, WeatherWidget } from "@/components/ui/weather-widget";
import { mockWeatherData } from "@/lib/mock-data";
import { Lightbulb, Thermometer } from "lucide-react";
import { useState } from "react";


export default function Home() {
  const [useMockData, setUseMockData] = useState(false);
  const [selectedWeather, setSelectedWeather] = useState<string>("sunny");
  const [animated, setAnimated] = useState(true);
  
  // Custom fetch function that returns mock data instead of calling the API
  const mockFetch = async (): Promise<WeatherData> => {    
    return mockWeatherData[selectedWeather];
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Weather Widget</h1>
        
        <div className="flex flex-col gap-4 p-4 bg-card rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Use Mock Data</span>
            <Toggle 
              pressed={useMockData} 
              onPressedChange={setUseMockData}
              aria-label="Toggle mock data"
            >
              <Thermometer className="w-4 h-4 text-green-600" />
            </Toggle>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Enable Animations</span>
            <Toggle 
              pressed={animated} 
              onPressedChange={setAnimated}
              aria-label="Toggle animations"
            >
              <Lightbulb className="w-4 h-4 text-yellow-600" />
            </Toggle>
          </div>
          
          {useMockData && (
            <div className="grid grid-cols-2 gap-2 mt-2">
              {Object.keys(mockWeatherData).map(weather => (
                <Button
                  key={weather}
                  size="sm"
                  variant={selectedWeather === weather ? "default" : "outline"}
                  onClick={() => setSelectedWeather(weather)}
                  className="text-xs capitalize"
                >
                  {weather}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        <WeatherWidget 
          apiKey={process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY} 
          width="16rem"
          className="shadow-md"
          onFetchWeather={useMockData ? mockFetch : undefined}
          animated={animated}
          onWeatherLoaded={(data) => console.log("Weather loaded:", data)}
          onError={(error) => console.error("Weather error:", error)}
        />
      </div>
      
      <div className="text-sm text-muted-foreground text-center max-w-md">
        <p className="mb-2">
          This component uses the OpenWeather API to display current weather conditions. 
          It supports both real API data and mock data for demonstration.
        </p>
        <p>
          Toggle the &quot;Use Mock Data&quot; option to see different weather conditions without making API calls.
        </p>
      </div>
    </div>
  );
}