<script>
    const title = "SHIJIE ZHOU | CV";

    export const url = 'https://cdn.jsdelivr.net/gh/shijiezhou1/Artemis@master/img/SHIJIE ZHOU RESUME.pdf';
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
</svelte:head>


<iframe frameborder="0" height="100%"
        src="{url}"
        class="cv-iframe"
        title="cv"
        scrolling="no"
></iframe>
