<script context="module">
    export async function preload( { params } ) {
        return { params };
    }
</script>

<script>
    import { items } from '../project/items';

    export let params;
    export let project = {
        title: "Project",
        html: ""
    };
    project = items.find( r => r.msg === params.msg );
    console.log( { project } );
  
</script>

<style lang="scss">
  .content {
    width: 100%;
  }

  .content :global(img) {
    width: 100%;
  }

  :global(iframe) {
    @media (max-width: 414px) {
      height: 250px;
    }
  }
</style>

<svelte:head>
  <title>{project.msg}</title>
  <meta name="{project.msg}" content="{project.html}">
</svelte:head>

<h1>{project.msg}</h1>

<div class="content">
  {@html project.html}
</div>
