<script context="module">
    export async function preload( { params } ) {
        return { params };
    }
</script>

<script>
    import { onMount } from 'svelte';
    import { items } from '../project/items';
    import Loader from "../../components/Loader.svelte";

    let loading = true;
    let loadingStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };
    onMount( async () => {
        setTimeout( () => {
            loading = false;
        }, 200 );
    } );

    export let params;
    export let project = {
        title: "Project",
        html: ""
    };
    project = items.find( r => r.msg === params.msg );

    // console.log( { project } );

    function cleanupHTML( html ) {
        return html.replace( /(<([^>]+)>)/ig, '' ).replace( /\n|<br>|\s/g, ' ' );
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
  <meta content="SEO" name="keywords"/>
  <meta content={project.msg} property="og:title"/>
  <meta content="article" property="og:type"/>
  <meta content={cleanupHTML(project.html)} property="og:description"/>
  <meta content="{getImageSource(project.html)}" property="og:image"/>
  <meta content={'https://www.shijiezhou.com/project/' + project.msg} property="og:url"/>
  <meta property="og:site_name" content="SHIJIE ZHOU">

  <meta property="twitter:image" content="{getImageSource(project.html)}">
  <meta property="twitter:url" content="{'https://www.shijiezhou.com/project/' + project.msg}">
  <meta property="twitter:card" content="summary">
  <meta property="twitter:title" content="{project.msg}">
  <meta property="twitter:description" content="{cleanupHTML(project.html)}">
</svelte:head>

<h1>{project.msg}</h1>

<div class="content">
  <Loader {loading} {loadingStyle}/>
  {@html project.html}
</div>
