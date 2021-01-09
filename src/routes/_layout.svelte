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
        { text: 'Home', path: '/', img: 'images/logo.png' }
    ]
</script>

<style>
    .app-container {
        flex: 1 1 auto;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        max-width: 100%;
        position: relative;
    }

    main {
        position: relative;
        max-width: 56em;
        padding: 2em;
        margin: 0 auto;
        box-sizing: border-box;
        flex: 1 1 auto;
        height: 100%;
        width: 100%;
    }

    .footer-container {
        font-size: 10px;

        align-items: center;
        display: flex;
        flex: 0 1 auto !important;
        flex-wrap: wrap;
        padding: 6px 16px;
        position: relative;
        transition-duration: .2s;
        transition-property: background-color, left, right;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    }
</style>

<div class="app-container">
  <header>
    <Nav {navigations} {segment}/>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer class="footer-container">Created by&nbsp;Shijie Zhou 2015 - &copy; { new Date().getFullYear() }</footer>
</div>
