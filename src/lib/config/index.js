export const VUE_APP_GITHUB_CDN = 'https://raw.githubusercontent.com/shijiezhou1/Artemis/master/';
export const VUE_APP_GITEE_CDN = 'https://raw.staticdn.net/shijiezhou1/Artemis/master/';
export const API_URL = 'https://api.shijiezhou.com/api/';
export const RESUME_URL = 'https://cdn.jsdelivr.net/gh/shijiezhou1/Artemis@master/img/SHIJIE ZHOU RESUME.pdf';

export const SITE = {
	name: 'SHIJIE ZHOU',
	author: 'Shijie Zhou',
	description:
		'Shijie Zhou — software engineer and computer artist. Explore front-end engineering projects, web development experiments, blog posts and more.',
	url: 'https://www.shijiezhou.com',
	image: 'https://www.shijiezhou.com/200.png',
	locale: 'en_US',
	lastmod: '2026-09-07',
	social: {
		gitlab: 'https://gitlab.com/shijiezhou1',
		medium: 'https://medium.com/@jay315',
		linkedin: 'https://www.linkedin.com/in/shijiezhou1/',
		github: 'https://github.com/shijiezhou1',
		twitter: 'https://twitter.com/ShijieZhou5',
		pinterest: 'https://www.pinterest.com/cs5129606/',
		stackoverflow: 'https://stackoverflow.com/users/10401645',
		tumblr: 'https://shijiezhou.tumblr.com/'
	}
};

export const navigations = [
	{
		text: 'Project',
		path: '/project',
		subMenu: [
			{
				type: 'link',
				text: 'Collection',
				path: '/collection'
			},
			{
				type: 'link',
				text: 'Exclusive',
				path: '/exclusive'
			}
		]
	},
	{
		text: 'About',
		path: '/about',
		subMenu: [
			{
				type: 'link',
				text: 'Blog',
				subText: 'Enjoy writing blog on Coach.',
				path: '/blog'
			},
			{
				type: 'link',
				text: 'Podcast',
				subText: 'Listen daily podcast route.',
				path: '/podcast'
			},
			{
				type: 'link',
				text: 'Book',
				subText: 'Read book to learn.',
				path: '/book'
			},
			{
				type: 'link',
				text: 'Consociation',
				subText: 'Consociation relative.',
				path: '/consociation'
			}
		]
	},
	{ text: 'CV', path: '/cv' },
	{ text: 'Contact', path: '/contact' },
	{
		text: 'Home',
		path: '/',
		img: 'https://cdn.jsdelivr.net/gh/shijiezhou1/Artemis@master/img/logo-text.png'
	}
];