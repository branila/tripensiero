<script>
  import '../app.css'

  import Navbar from '$components/layout/Navbar.svelte'
  import Footer from '$components/layout/Footer.svelte'
</script>


<div class="outer-container">
  <Navbar/>

  <div class="inner-container">
    <slot/>
  </div>

  <Footer/>
</div>


<style>
  .outer-container {
    padding-inline: 40px;
    background-color: var(--dark);
  }

  .inner-container {
    min-height: calc(100vh - 75px);
  }

  @media (max-width: 600px) {
    .outer-container {
      padding-inline: 20px;
    }
  }
</style>