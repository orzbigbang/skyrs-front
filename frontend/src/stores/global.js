import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const isNavFooter = ref(true)

  const fcMask = ref(false)

  return { 
    isNavFooter,
    fcMask 
  }
})
