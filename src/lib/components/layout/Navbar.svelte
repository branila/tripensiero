<script>
  import Language from '$components/layout/Language.svelte'
</script>

<nav>
  <a href="/">
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
    background-color: var(--dark);
    color: var(--light);
  }

  nav a {
    text-decoration: none;
    color: var(--light);
    font-size: 18px;
    font-weight: bold;
  }
</style>