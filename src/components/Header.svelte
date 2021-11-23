<script>
  // import Logo from './Logo.svelte'
</script>

<div class="logo">
  <img src="./images/outlier-logo.png" alt="Outlier Logo" />
  <div class="logo-tagline">Making sense of the world through data</div>
</div>
<div>
  <a href="/">Home</a> | <a href="/#/about">About</a> |
  <a href="/#/list/202">List ID 20</a> | <a href="/#/map">Map</a>
</div>

<style>
  div {
    font-family: var(--sansFont);
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: solid 1px var(--gray100);
    margin-bottom: 20px;
  }
  .logo {
    max-width: 400px;
  }
  .logo-tagline {
    background: var(--red);
    color: #fff;
    text-align: center;
    padding: 10px;
    margin: 0px;
    font-weight: 700;
    font-size: 1.3rem;
  }
</style>
