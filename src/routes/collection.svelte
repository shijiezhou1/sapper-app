<script>
    import Quota from "../components/Quota.svelte";

    const title = "Collection:";
    const quote = "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.";
    const brief = "— Antoine de Saint-Exupéry, French writer, poet, aristocrat, journalist and pioneering aviator";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Quota {brief} {quote} {title}/>