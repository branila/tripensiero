import { writable } from 'svelte/store'

function createStore() {
  const { subscribe, set } = writable()
  
  return {
    subscribe,
    change: (newLanguage: string) => {
      set(newLanguage)
      localStorage.setItem('language', newLanguage)
    }
  }
}

// The default value of the store is defined at runtime in the Language.svelte component
export const language = createStore()