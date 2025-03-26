<script setup>
import { service } from './utils/request'
import { useWeatherStore } from '@/stores'

const getWeatherData = (cityname = '') => {
  const apiKey = '0ee09af8af45cf35fbc30bd383762e0a'
  const requestParams = {
    key: apiKey,
    cityname,
    dtype: 'json',
    format: '',
  }
  return service.get('/weather/index', { params: requestParams })
  // .then((res) => {
  //   // console.log(res)
  // })
  // .catch((err) => {
  //   console.log(err)
  // })
}
const fetchData = async () => {
  const data = await getWeatherData('上海')
  console.log(data)
  const weatherStore = useWeatherStore()
  weatherStore.setWeather(data)
}
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
  <button @click="fetchData">测试axios</button>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple {
  background-color: rgb(192, 184, 192); /* 自定义背景颜色 */
}
</style>
