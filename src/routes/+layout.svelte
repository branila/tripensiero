<script>
  import '../app.css'

  import Navbar from './Navbar.svelte'
  import Footer from './Footer.svelte'
</script>

<Navbar/>
  
<div class="inner-container">
  <slot/>
</div>

<Footer/>

<style>
  .inner-container {
    min-height: calc(100svh - 100px);
  }
</style>