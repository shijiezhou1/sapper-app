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
  } from '@fortawesome/free-brands-svg-icons';

  import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

  import { fetchSubscribe } from '@/store/api';

  let inputValue = '';

  const socialItem = [
    {
      name: faGitlab,
      url: 'https://gitlab.com/shijiezhou1',
      color: '#fa6d25',
    },
    {
      name: faMedium,
      url: 'https://medium.com/@jay315',
      color: '#000000',
    },
    {
      name: faLinkedin,
      url: 'https://www.linkedin.com/in/shijiezhou1/',
      color: '#0a66c2',
    },
    {
      name: faGithub,
      url: 'https://github.com/shijiezhou1',
      color: '#000000',
    },
    {
      name: faTwitter,
      url: 'https://twitter.com/ShijieZhou5',
      color: '#1ea1f2',
    },
    {
      name: faPinterest,
      url: 'https://www.pinterest.com/cs5129606/',
      color: '#e60023',
    },
    {
      name: faStackOverflow,
      url: 'https://stackoverflow.com/users/10401645',
      color: '#f48023',
    },
    {
      name: faTumblrSquare,
      url: 'https://shijiezhou.tumblr.com/',
      color: '#000000',
    },
  ];

  async function handleClick() {
  
    const data = {
      email: inputValue,
    };
    await fetchSubscribe(data).then((r) => {
      console.log(r);
      alert( 'Subscribed successfully!' );
    });
  }
</script>

<div class="subscribe">
  <input placeholder="Email to subscribe" type="text" bind:value={inputValue} />
  <div on:click={handleClick}>
    <Fa color="red" icon={faEnvelope} size="2x" />
  </div>
</div>

<div class="social-medias">
  {#each socialItem as _, i}
    <a href={_.url} target="_blank">
      <Fa icon={_.name} color={_.color} size="2x" />
    </a>
  {/each}
</div>

<style lang="scss">
  input[type='text'] {
    font-size: 16px;
  }

  .social-medias {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    a {
      padding: 10px;
    }

    @media (max-width: 414px) {
      width: 60%;
      margin: auto;
    }
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
      @media (max-width: 414px) {
        min-width: 200px;
      }
    }

    div {
      cursor: pointer;
    }
  }
</style>
