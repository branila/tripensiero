<script>
  import Language from './Language.svelte'
</script>

<nav>
  <a class="logo" href="/">
    Tripensiero
  </a>

  <Language/>
</nav>

<style>
  nav {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary);
    color: var(--primary);
    padding: 0 clamp(25px, 15vw, 15vw);
  }

  nav a {
    text-decoration: none;
    color: var(--primary);
  }
</style>