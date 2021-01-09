<script>
    import Quota from "../components/Quota.svelte";

    const title = "About:";
    const quote = "Every person has two education, one which he receives from other, and one, more important, which he gives himself.";
    const brief = "— Edward Gibbon, British historian";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Quota {brief} {quote} {title}/>