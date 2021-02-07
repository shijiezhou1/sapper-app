<script>
    let metaTitle = '';
    let siteName = '';

    let longDesc = '';

    function cleanupHTML(html) {
      return html.replace(/(<([^>]+)>)/ig, '').replace(/\n|<br>|\s/g,' ');
    }

    function getImageSource( image ) {
      const regex = /src=\"([^"]+)\"/;
      // always check if the image is present before returning
      return image ? image.match( regex )[ 1 ] : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/pike-place.jpg';
    }


</script>

<meta name="{metaTitle}" content="{cleanupHTML(longDesc)}">
<meta name="keywords" content="SEO" />
<meta property="og:title" content={metaTitle} />
<meta property="og:type" content="article" />
<meta property="og:description" content={cleanupHTML(longDesc)} />
<meta property="og:image" content="{getImageSource(longDesc)}" />
<meta property="og:url" content={'https://www.shijiezhou.com/project/' + metaTitle} />
<meta property="og:site_name" content="{siteName}">

<meta property="twitter:image" content="{getImageSource(longDesc)}">
<meta property="twitter:url" content="{'https://www.shijiezhou.com/project/' + metaTitle}">
<meta property="twitter:card" content="summary">
<meta property="twitter:title" content="{metaTitle}">
<meta property="twitter:description" content="{cleanupHTML(longDesc)}">