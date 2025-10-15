<script>
  import { items } from './project/items.js';
  // import Prometheus from '../components/Prometheus.svelte';
  import IndexMeta from '../components/IndexMeta.svelte';

  let title = 'SHIJIE ZHOU | Home';
  let newItem = items;

  newItem = newItem.slice(0, 9);

  function watchTitle() {
    title = 'SHIJIE ZHOU | PORTFOLIO';
  }

  $: watchTitle();
</script>

<svelte:head>
  <title>{title}</title>
  <IndexMeta />
</svelte:head>

<!-- <Prometheus items={newItem} /> -->

<iframe
  src="https://news.shijiezhou.com/"  
  title="Full-screen content"
  style="
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    border: none;
    z-index: 9999;
  "
></iframe>
