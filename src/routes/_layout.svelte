<script>
    import Nav from '../components/Nav.svelte';

    export let segment;
    export let navigations;

    navigations = [
        {
            text: 'Project', path: '/project', subMenu: [
                {
                    type: 'link',
                    text: 'Expedition',
                    path: './expedition',
                    iconLeft: '<i class="fa fa-user fa-fw"></i>'
                },
                {
                    type: 'link',
                    text: 'Collection',
                    path: './collection',
                    iconLeft: '<i class="fa fa-star fa-fw"></i>'
                },
                {
                    type: 'link',
                    text: 'Exclusive',
                    path: './exclusive',
                    iconLeft: '<i class="fas fa-air-freshener" aria-hidden="true"></i>'
                }
            ]
        },
        {
            text: 'About', path: '/about', subMenu: [
                {
                    type: 'link',
                    text: 'Blog',
                    subText: 'Enjoy writing blog on Coach.',
                    path: './blog'
                },

                {
                    type: 'link',
                    text: 'Podcast',
                    subText: 'Listen daily podcast route.',
                    path: './podcast'
                },

                {
                    type: 'link',
                    text: 'Book',
                    subText: 'Read book to learn.',
                    path: './book'
                },

                {
                    type: 'link',
                    text: 'Consociation',
                    subText: 'Consociation relative.',
                    path: './consociation'
                }
            ]
        },
        { text: 'CV', path: '/cv' },
        { text: 'Contact', path: '/contact' },
    ]
</script>

<style>
    main {
        position: relative;
        max-width: 56em;
        background-color: white;
        padding: 2em;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>

<Nav {segment} {navigations}/>

<main>
  <slot></slot>
</main>