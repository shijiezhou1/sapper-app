<script>

    import Fa from 'svelte-fa';

    import {
        faGithub,
        faGitlab,
        faLinkedin,
        faMedium,
        faPinterest,
        faStackOverflow,
        faTumblrSquare,
        faTwitter,
    } from "@fortawesome/free-brands-svg-icons";

    import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

    const socialItem = [
        {
            name: faGitlab,
            url: 'https://gitlab.com/shijiezhou1',
            color: '#fa6d25'
        },
        {
            name: faMedium,
            url: 'https://medium.com/@.jay',
            color: '#000000'
        },
        {
            name: faLinkedin,
            url: 'https://www.linkedin.com/in/shijiezhou1/',
            color: '#0a66c2'
        },
        {
            name: faGithub,
            url: 'https://github.com/shijiezhou1',
            color: '#000000'
        },
        {
            name: faTwitter,
            url: 'https://twitter.com/ShijieZhou5',
            color: '#1ea1f2'
        },
        {
            name: faPinterest,
            url: 'https://www.pinterest.com/cs5129606/',
            color: '#e60023'
        },
        {
            name: faStackOverflow,
            url: 'https://stackoverflow.com/users/10401645',
            color: '#f48023'
        },
        {
            name: faTumblrSquare,
            url: 'https://shijiezhou.tumblr.com/',
            color: '#000000'
        },
    ];
</script>


<style lang="scss">
  .social-medias {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .subscribe {
    text-align: center;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    input {
      min-width: 320px;
      margin-right: 10px;
      padding: 10px;
      position: relative;
    }
  }
</style>

<div class="subscribe">
  <input placeholder="Subscribe me" type="text">
  <a>
    <Fa color="red" icon={faEnvelope} size="2x"/>
  </a>
</div>


<div class="social-medias">
  {#each socialItem as _, i}
    <a href="{_.url}" target="_blank">
      <Fa icon={_.name} color="{_.color}" size="2x"/>
    </a>
  {/each}
</div>