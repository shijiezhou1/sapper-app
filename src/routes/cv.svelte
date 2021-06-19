<script>
    import IndexMeta from '../components/IndexMeta.svelte';
    const title = "SHIJIE ZHOU | CV";

    export const url = 'https://cdn.jsdelivr.net/gh/shijiezhou1/Artemis@master/img/SHIJIE ZHOU RESUME.pdf';

    let curWidth;

    const handleResize = () => {
        curWidth = window.innerWidth;
    };
</script>

<style lang="scss">
  .cv-iframe {
    width: 100%;
    overflow: hidden;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>

<svelte:head>
  <title>{title}</title>
  <IndexMeta />
</svelte:head>

<svelte:window on:resize={handleResize}/>

{#if curWidth % 2 === 0}
  <iframe frameborder="0" height="100%" width="{curWidth + 'px'}"
          src="{url}"
          class="cv-iframe"
          title="cv"
          scrolling="no"
  ></iframe>
{/if}

{#if curWidth % 2 !== 0}
  <iframe frameborder="0" height="100%" width="{curWidth + 'px'}"
          src="{url}"
          class="cv-iframe"
          title="cv"
          scrolling="no"
  ></iframe>
{/if}
