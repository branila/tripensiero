<script lang="ts">
  import { onMount } from 'svelte';
  import { language } from '$stores/language'

  onMount(() => language.change(localStorage.getItem('language') || 'it'))
</script>

<div>
  <button class:active={$language == 'it'} on:click={() => language.change('it')}>
    IT
  </button>

  <span> | </span>
  
  <button class:active={$language == 'en'} on:click={() => language.change('en')}>
    EN
  </button>
</div>

<style>
  button {
    background-color: var(--background);
    color: var(--primary);
    border: 0;
    border-radius: 5px;
    padding: 5px;
    color: var(--unactive);
    transition: 0.2s;
    font-size: 12px;
  }

  button:hover {
    color: var(--primary);
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
  }

  .active {
    color: var(--primary);
    font-weight: bold;
  }

  div {
    user-select: none;
    cursor: default;
  }
</style>