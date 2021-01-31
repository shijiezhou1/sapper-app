export const VUE_APP_GITHUB_CDN = 'https://raw.githubusercontent.com/shijiezhou1/Artemis/master/';
// export const API_URL = 'https://shijiezhou.herokuapp.com/api/';
export const API_URL = 'https://api.shijiezhou.com/api/';

export const navigations = [
    {
        text: 'Project', path: '/project', subMenu: [
            // {
            //     type: 'link',
            //     text: 'Expedition',
            //     path: './expedition',
            //     iconLeft: '<i class="fa fa-user fa-fw"></i>'
            // },
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