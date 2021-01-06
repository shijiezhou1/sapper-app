<script>
    export let items;
</script>

<style lang="scss">
    .gallery {
        max-width: 768px;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        align-items: center;
        img {
            cursor: pointer;
            width: 200px;
            height: 200px;
            &:hover {
                box-shadow: 0px 0px 5px 0px black;
            }
        }
    }
</style>

<div class="gallery">
    {#each items as item, i}<img class="img" src={item.img} alt="img" />{/each}
</div>
