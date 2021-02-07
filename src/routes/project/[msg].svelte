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
    // console.log( { project } );

    function cleanupHTML(html) {
      return html.replace(/(<([^>]+)>)/ig, '').replace(/\n|<br>|\s/g,' ');
    }

    function getImageSource( image ) {
      const regex = /src=\"([^"]+)\"/;
      // always check if the image is present before returning
      return image ? image.match( regex )[ 1 ] : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/pike-place.jpg';
    }
  
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
  <meta name="{project.msg}" content="{cleanupHTML(project.html)}">
  <meta name="keywords" content="SEO" />
  <meta property="og:title" content={project.msg} />
  <meta property="og:type" content="article" />
  <meta property="og:description" content={cleanupHTML(project.html)} />
  <meta property="og:image" content="{getImageSource(project.html)}" />
  <meta property="og:url" content={'https://www.shijiezhou.com/project/' + project.msg} />
  <meta property="og:site_name" content="SHIJIE ZHOU">

  <meta property="twitter:image" content="{getImageSource(project.html)}">
  <meta property="twitter:url" content="{'https://www.shijiezhou.com/project/' + project.msg}">
  <meta property="twitter:card" content="summary">
  <meta property="twitter:title" content="{project.msg}">
  <meta property="twitter:description" content="{cleanupHTML(project.html)}">
</svelte:head>

<h1>{project.msg}</h1>

<div class="content">
  {@html project.html}
</div>
