import { writable } from 'svelte/store'

// The default value of the store is defined at runtime in $components/layout/Language.svelte
const { subscribe, set } = writable()

function change(newLanguage: string) {
  set(newLanguage)
  localStorage.setItem('language', newLanguage)
}

export default {
  subscribe,
  change
}