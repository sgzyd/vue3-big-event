import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
  const weather = ref({})
  const setWeather = (data) => {
    weather.value = data
  }
  return { weather, setWeather }
})
