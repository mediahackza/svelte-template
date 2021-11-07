<script>
  import story from '../data/test-story.json'
</script>

<div class="cover-image">
  <img src={story.images.cover.src} alt={story.images.cover.alt} />
</div>
<h2>{story.headline}!</h2>
<div class="byline">By {story.authors}</div>
<div class="body">
  <section>
    {#each story.section1 as para}
      <p>{para.value}</p>
    {/each}
  </section>
  <div class="inline-image">
    <img src={story.images.section1.src} alt={story.images.section1.alt} />
  </div>
  <section>
    {#each story.section2 as para}
      <p>{para.value}</p>
    {/each}
  </section>
</div>

<style>
  .byline {
    font-family: var(--sansFont);
  }
  .cover-image {
    width: 100%;
  }
  .cover-image img {
    width: 70%;
  }
</style>
