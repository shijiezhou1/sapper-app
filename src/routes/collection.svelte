<script>
    import Quota from "../components/Quota.svelte";
    import { Swipe, SwipeItem } from "svelte-swipe";
    import { VUE_APP_GITHUB_CDN } from "../config";

    const swipeConfig = {
        autoplay: false,
        delay: 2000,
        showIndicators: true,
        transitionDuration: 1000,
        defaultIndex: 0,
    };

    const slides = [
        { src: VUE_APP_GITHUB_CDN + "img/collection1.jpg" },
        { src: VUE_APP_GITHUB_CDN + "img/collection2.jpg" },
        { src: VUE_APP_GITHUB_CDN + "img/collection3.jpg" },
        { src: VUE_APP_GITHUB_CDN + "img/collection4.jpg" },
        { src: VUE_APP_GITHUB_CDN + "img/collection5.jpg" },
    ]

    const title = "SHIJIE ZHOU | Collection";
    const quote = "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.";
    const brief = "— Antoine de Saint-Exupéry, French writer, poet, aristocrat, journalist and pioneering aviator";
</script>

<style lang="scss">
  .swipe-holder {
    height: 47vh;
    width: 100%;
    @media (max-width: 414px) {
      height: 25vh;
    }
  }

  img {
    width: 100%;
    height: 400px;
    @media (max-width: 414px) {
      height: 200px;
    }
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Quota {brief} {quote} title="Collection:"/>

<div class="swipe-holder">
  <Swipe {...swipeConfig}>
    {#each slides as _, i}
      <SwipeItem>
        <img src={_.src} alt={_.src}>
      </SwipeItem>
    {/each}
  </Swipe>
</div>