<script>
    export let segment;
    export let navigations;
    import { clickOutside } from '../utils/clickOutside.js';

    let showChild = null;
    let showDarkMode = false;
    let darkMode = false;
  
    function handleShowNav( index ) {
        showChild = index;
    }

    function handleCloseSubMenu() {
        showChild = null;
    }

    function handleShowDarkMode(val) {
      showDarkMode = val;
    }

    function handleDarkMode() {
      if (!darkMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkMode = true;
      } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkMode = false;
      }
    }

</script>

<nav>
  <ul>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
         the blog data when we hover over the link or tap it on a touchscreen -->
    {#each navigations as _, i}
      {#if _.text !== 'Home' }
        <li on:mouseover={() => handleShowNav(i)}><a rel=prefetch aria-current="{segment === _.text.toLowerCase() ? 'page' : undefined}"
               on:click={()=>handleShowNav(i)}
               href="{_.path}">{_.text}</a>
          {#if ( _.subMenu && i === showChild ) }
            <div class="subMenu" use:clickOutside on:clickOutside={handleCloseSubMenu} 
              on:mouseleave={() => handleShowNav(null)}>
              {#each _.subMenu as _, i}
                <a class="subMenu-row" href="{_.path}" on:click={handleCloseSubMenu}>{_.text}</a>
              {/each}
            </div>
          {/if}
        </li>
      {:else}
        <li class="logo" on:mouseleave={() => handleShowDarkMode(false)}>
          <a href={_.path} on:mouseover={() => handleShowDarkMode(true)} >
            <img src={_.img} alt="{_.img}">
          </a>
          {#if showDarkMode}
          <div class="dark-mode">
            <label class="switch">
              <input type="checkbox" on:click={()=>handleDarkMode()}>
              <span class="slider round"></span>
            </label>
          </div>
          {/if}
        </li>
      {/if}
    {/each}
  </ul>
</nav>


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

    @media (min-width: 414px) {
      &:hover {
        .subMenu {
          display: block;
        }
      }
    }


    &.logo {
      display: flex;
      align-items: center;
      margin-left: auto;
      justify-content: flex-end;
      position: relative;

      img {
        width: 80px;
        height: 30px;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
      }

      .dark-mode {
        position: absolute;
        margin-top: 86px;

      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 28px;
      }

      .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }

      input:checked + .slider {
        background-color: black;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px black;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(32px);
        -ms-transform: translateX(32px);
        transform: translateX(32px);
      }

      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
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
</style>