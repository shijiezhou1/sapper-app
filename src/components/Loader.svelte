<script>
    import { Stretch } from 'svelte-loading-spinners';

    export let loading;
</script>

<style>
    .loader-position {
        position: absolute;
        top: 50%;
        left: 50%;
        -moz-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
    }
</style>

{#if loading}
  <div class="loader-position">
    <Stretch size="60" color="#FF3E00" unit="px"></Stretch>
  </div>
{/if}