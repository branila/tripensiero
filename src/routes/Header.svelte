<script>
  import { language } from '$stores/language'
</script>

<header>
  <div>
    {#if $language == 'en'}
      In a time of universal <span>deceit</span> telling the <span>truth</span> is a revolutionary act.
    {:else if $language == 'it'}
      Nel tempo dell'<span>inganno</span> universale dire la <span>verità</span> è un atto rivoluzionario.
    {/if}
  </div>
</header>

<style>
  header {
    padding: 0 clamp(25px, 15vw, 15vw);
    height: calc(33svh - 75px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
  }
  
  header div {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: var(--primary);
  }

  header span {
    color: var(--accent);
  }
</style>

