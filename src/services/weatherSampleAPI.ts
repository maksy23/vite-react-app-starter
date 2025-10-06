/**
 * Axios weather sample API service
 */

import axios from 'axios'

const API_KEY = 'your-key'

export const getWeather = async (city: string) => {
  const response = await axios.get(`https://api.weather.com/data`, {
    params: { city, apiKey: API_KEY },
  })
  return response.data
}
