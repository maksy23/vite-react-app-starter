export interface WeatherModel {
  weather: string | null

  // Actions
  setWeather: (weather: string) => void
}

export function weatherModel(): WeatherModel {
  return {
    weather: null,

    setWeather: (weather: string) => {
      return {
        weather,
      }
    },
  }
}
