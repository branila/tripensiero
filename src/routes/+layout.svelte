<script>
  import '../app.css'

  import Navbar from './Navbar.svelte'
  import Footer from './Footer.svelte'
</script>

<div class="outer-container">
  <Navbar/>
  
  <div class="inner-container">
    <slot/>
  </div>
  
  <Footer/>
</div>

<style>
  .inner-container {
    min-height: calc(100svh - 100px);
  }

  .outer-container {
    padding: 0 clamp(50px, 15vw, 15vw);
  }
</style>