<script>
    export let items;

    function optimizeUrl( url ) {
        return url;
    }
</script>

<style lang="scss">
  .gallery {
    justify-content: center;
    max-width: 768px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    margin: auto;

    img {
      width: 100%/3;
      cursor: pointer;
      width: 180px;
      height: 180px;

      &:hover {
        box-shadow: 0px 0px 5px 0px black;
      }
    }
  }
</style>

<div class="gallery">
  {#each items as item, i}
    {#if item.url}
      <a href="{item.url}">
        <img class="img" src={optimizeUrl(item.img)} alt="img"/>
      </a>
    {:else}
      <img class="img" src={optimizeUrl(item.img)} alt="img"/>
    {/if}
  {/each}
</div>

