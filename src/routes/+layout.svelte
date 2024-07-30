<script>
  import '../app.css'

  import Navbar from '$components/layout/Navbar.svelte'
  import Footer from '$components/layout/Footer.svelte'
</script>

<Navbar/>

<div class="container">
  <slot/>
</div>

<Footer/>

<style>
  .container {
    min-height: calc(100svh - 100px);
  }
</style>