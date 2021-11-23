<script>
  import Router from 'svelte-spa-router'
  import { routes } from './routes'
  import Header from './components/Header.svelte'
  import NewsletterPromo from './components/NewsletterPromo.svelte'
</script>

<main>
  <Header />
  <Router {routes} />
  <NewsletterPromo />
</main>
