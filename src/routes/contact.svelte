<script>
    import Quota from "../components/Quota.svelte";
    import SocialMedia from "../components/SocialMedia.svelte";

    const title = "SHIJIE ZHOU | Contact";
    const quote = "Tough-minded optimists approach problems with a can-do philosophy and emerge stronger from tragedies";
    const brief = "— Lucius Annaeus Senca, Ancient Roman philosopher";


</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Quota {brief} {quote} title="Contact:"/>

<SocialMedia/>