<script>
  import IndexMeta from '../components/IndexMeta.svelte';
  const title = 'SHIJIE ZHOU | CV';
  import { RESUME_URL } from '../config/index';

  let curWidth;

  const handleResize = () => {
    curWidth = window.innerWidth;
  };
</script>

<svelte:head>
  <title>{title}</title>
  <IndexMeta />
</svelte:head>

<svelte:window on:resize={handleResize} />

{#if curWidth % 2 === 0}
  <iframe
    frameborder="0"
    height="100%"
    width={curWidth + 'px'}
    src={RESUME_URL}
    class="cv-iframe"
    title="cv"
    scrolling="no"
  />
{/if}

{#if curWidth % 2 !== 0}
  <iframe
    frameborder="0"
    height="100%"
    width={curWidth + 'px'}
    src={RESUME_URL}
    class="cv-iframe"
    title="cv"
    scrolling="no"
  />
{/if}

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
