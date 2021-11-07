import Home from './routes/Home.svelte'
import About from './routes/About.svelte'
import List from './routes/List.svelte'

export const routes = {
  '/': Home,
  '/about': About,
  '/list/:id': List,
  //   '*': NotFound,
}
