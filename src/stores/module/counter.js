import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const token = ref(
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTUxLCJ1c2VybmFtZSI6Imxhb2xpNjY2NiIsIm5pY2tuYW1lIjoiIiwiZW1haWwiOiIiLCJpYXQiOjE2NTQ2OTg0ODAsImV4cCI6MTY1NDczNDQ4MH0.fGX3kR-HWE5sk3HFXB7R4LXkmHKnqcP3bQKtKqejyfo',
  )
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, token, increment }
})
