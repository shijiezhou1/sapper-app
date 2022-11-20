<script>
  export let segment;
  export let navigations;
  import { clickOutside } from '../utils/clickOutside.js';

  let showChild = null;

  function handleShowNav(index) {
    showChild = index;
  }

  function handleCloseSubMenu() {
    showChild = null;
  }
</script>

<nav data-theme="light">
  <ul>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
         the blog data when we hover over the link or tap it on a touchscreen -->
    {#each navigations as _, i}
      {#if _.text !== 'Home'}
        <li on:foucus:mouseover={() => handleShowNav(i)}>
          <a
            rel="prefetch"
            aria-current={segment === _.text.toLowerCase() ? 'page' : undefined}
            on:click={() => handleShowNav(i)}
            href={_.path}>{_.text.toUpperCase()}</a
          >
          {#if _.subMenu && i === showChild}
            <div
              class="subMenu"
              use:clickOutside
              on:clickOutside={handleCloseSubMenu}
              on:mouseleave={() => handleShowNav(null)}
            >
              {#each _.subMenu as _, i}
                <a
                  class="subMenu-row"
                  href={_.path}
                  on:click={handleCloseSubMenu}>{_.text.toUpperCase()}</a
                >
              {/each}
            </div>
          {/if}
        </li>
      {:else}
        <li class="logo">
          <a href={_.path}>
            <img src={_.img} alt={_.img} />
          </a>
        </li>
      {/if}
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    background-color: var(--bg-color);
    color: var(--bg-text);
  }

  ul {
    margin: 0;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    background-color: inherit;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    list-style: none;
    background-color: inherit;
    @media (min-width: 414px) {
      &:hover {
        .subMenu {
          display: block;
        }
      }
    }

    a {
      color: initial;
    }

    &.logo {
      display: flex;
      align-items: center;
      margin-left: auto;
      justify-content: flex-end;
      position: relative;

      img {
        width: 80px;
        height: 32px;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
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
    display: block;
    position: absolute;
    z-index: 1;
    border: 1px solid lightgray;
    cursor: pointer;
    background-color: inherit;

    &-row {
      padding: 10px;

      &:hover {
        background-color: lightgray;
      }
    }
  }

  @media (max-width: 414px) {
    .subMenu {
      background-color: white;
    }
  }
</style>
