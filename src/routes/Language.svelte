<script lang="ts">
  function changeLanguage(language: string) {
    console.log(language)
  }
</script>

<div>
  <button on:click={() => changeLanguage('it')}>
    IT
  </button>
  
  <button on:click={() => changeLanguage('en')}>
    EN
  </button>
</div>

<style>
  div {
    width: fit-content;
  }

  button {
    background-color: var(--secondary);
    color: var(--primary);
    border: 0;
  }
</style>