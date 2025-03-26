import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useCounterStore } from './module/counter'
import { useWeatherStore } from './module/weather'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
export { useCounterStore, useWeatherStore }
