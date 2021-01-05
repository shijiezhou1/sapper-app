<script>
    export let segment;
    export let navigations;
</script>

<style lang="scss">
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
  }

  ul {
    margin: 0;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    list-style: none;

    &:hover {
      .subMenu {
        display: block;
      }
    }

    &.logo {
      display: flex;
      align-items: center;
      margin-left: auto;

      img {
        width: 80px;
        height: 30px;
      }

      a {
        padding: 0;
        margin: 0;
      }
    }
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .subMenu {
    display: none;
    position: absolute;
    z-index: 1;
    border: 1px solid lightgray;
    cursor: pointer;
    background-color: white;

    &-row {
      padding: 10px;

      &:hover {
        background-color: lightgray
      }
    }
  }
</style>

<nav>
  <ul>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
         the blog data when we hover over the link or tap it on a touchscreen -->
    {#each navigations as _, i}
      {#if _.text !== 'Home' }
        <li><a rel=prefetch aria-current="{segment === _.text.toLowerCase() ? 'page' : undefined}"
               href="{_.path}">{_.text}</a>
          {#if ( _.subMenu ) }
            <div class="subMenu">
              {#each _.subMenu as _, i}
                <a class="subMenu-row" href="{_.path}">{_.text}</a>
              {/each}
            </div>
          {/if}
        </li>
      {:else}
        <li class="logo">
          <a href={_.path}>
            <img src={_.img} alt="img">
          </a>
        </li>
      {/if}

    {/each}
  </ul>
</nav>
