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
    align-items: center;
    margin: auto;

    div {
      position: relative;
      cursor: pointer;
      width: 180px;
      height: 180px;
      padding: 10px;

      img {
        width: 180px;
        height: 180px;
      }

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: auto;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgb(62, 93, 246) 0%, rgba(70, 211, 252, 1) 100%);
        color: white;
        font-size: 18px;
        opacity: 0;
        transition: 0.55s;
      }

      &:hover {
        box-shadow: 0px 0px 5px 0px black;

        p {
          opacity: 1;
        }
      }
    }
  }
</style>

<div class="gallery">
  {#each items as item, i}
    <div>
      {#if item.url}
        <a href="{item.url}">
          <img class="img" src={optimizeUrl(item.img)} alt="img"/>
        </a>
      {:else}
        <a href="project/{item.msg}">
          <img class="img" src={optimizeUrl(item.img)} alt="{item.des}"/>
          {#if item.des}
            <p class="img-desc">{item.des}</p>
          {/if}
        </a>
      {/if}
    </div>
  {/each}
</div>

