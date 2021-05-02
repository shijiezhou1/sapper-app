<script>
  // import { Stretch } from 'svelte-loading-spinners';

  export let loading;
  export let loadingStyle = null;
</script>

{#if loading}
  <div class="loader-position" style={loadingStyle}>
    <div class="lds-facebook">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
{/if}

<style lang="scss">
  .loader-position {
    position: fixed;
    top:50%;
    left: 45%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 414px) {
      top: 45%;
      left: 36%;
    }
  }
  .lds-facebook {
    /* display: inline-block;
    position: relative;
    width: 100%;
    height: 100%; */
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #ff3e00;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.48s;
  }
  .lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.36s;
  }
  .lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(4) {
    left: 80px;
    animation-delay: -0.12s;
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
</style>
