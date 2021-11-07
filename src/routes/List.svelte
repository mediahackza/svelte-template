<script>
  // list page
  // will work on supplied id
  export let params = {}
  $: console.log(params)
</script>

<div class="home">
  List page. ID = {params.id}
  <p>
    The ID here is retrieved from the URL. See the 'routes.js' file for the
    route setup.
  </p>
</div>
