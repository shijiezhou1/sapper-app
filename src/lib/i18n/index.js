export const locales = ['en', 'zh'];
export const DEFAULT_LOCALE = 'en';

/** @param {string} path @param {string} lang */
export function localizedPath(path, lang) {
	if (lang === DEFAULT_LOCALE) return path;
	return lang === 'zh' ? (path === '/' ? '/zh' : `/zh${path}`) : path;
}

/** @param {string} pathname */
export function stripLocale(pathname) {
	if (pathname === '/zh' || pathname === '/zh/') return '/';
	if (pathname.startsWith('/zh/')) return pathname.slice(3);
	return pathname;
}

const nav = {
	en: {
		'/': 'Home',
		'/project': 'Project',
		'/collection': 'Collection',
		'/exclusive': 'Exclusive',
		'/about': 'About',
		'/blog': 'Blog',
		'/podcast': 'Podcast',
		'/book': 'Book',
		'/consociation': 'Community',
		'/cv': 'CV',
		'/contact': 'Contact'
	},
	zh: {
		'/': '首页',
		'/project': '项目',
		'/collection': '收藏',
		'/exclusive': '独家',
		'/about': '关于',
		'/blog': '博客',
		'/podcast': '播客',
		'/book': '书籍',
		'/consociation': '社区',
		'/cv': '简历',
		'/contact': '联系'
	}
};

const pages = {
	en: {
		home: { title: 'Portfolio', h1: 'SHIJIE ZHOU — Portfolio' },
		about: {
			title: 'About',
			heading: 'About:',
			description:
				'Shijie Zhou is a software engineer and computer artist from UC San Diego, now building web experiences at Code 9, Pte Ltd.',
			quote: 'Every person has two education, one which he receives from other, and one, more important, which he gives himself.',
			brief: '— Edward Gibbon, British historian',
			bio: 'Shijie Zhou studies at University of California, San Diego in the Interdisciplinary Computer in Arts. He is also the member for design and construct web developer at the Worldview Project organization. Currently, he is working in Code 9, Pte Ltd software engineer. He obtains Associate degree in Green River College, and also finish the B.A. degree at UCSD. He gained experience in media use and computer art. He also familiar with web design and customize selling pages on ebay which promote stuffs at leisure time.'
		},
		project: {
			title: 'Project',
			heading: 'Project:',
			description: 'A selection of front-end engineering, design and creative coding projects by Shijie Zhou.',
			quote: 'The Way Get Started Is To Quit Talking And Begin Doing.',
			brief: '-- Walt Disney, Entrepreneur, Animator, Writer, Voice actor and Film Producer.'
		},
		blog: {
			title: 'Blog',
			heading: 'Blog:',
			description: 'Articles and experiments from Shijie Zhou about web development, engineering and design.',
			quote: 'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
			brief: '- Albert Einstein Theoretical Physicist'
		},
		book: {
			title: 'Book',
			description: 'Books Shijie Zhou is reading and learning from.'
		},
		collection: {
			title: 'Collection',
			heading: 'Collection:',
			description: 'Visual experiments and inspiration collected by Shijie Zhou.',
			quote: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
			brief: '— Antoine de Saint-Exupéry, French writer, poet, aristocrat, journalist and pioneering aviator'
		},
		consociation: {
			title: 'Consociation',
			description: 'Communities, events and collaborations involving Shijie Zhou.'
		},
		contact: {
			title: 'Contact',
			heading: 'Contact:',
			description: 'Get in touch with Shijie Zhou — email subscription and social profiles.',
			quote: 'Tough-minded optimists approach problems with a can-do philosophy and emerge stronger from tragedies',
			brief: '— Lucius Annaeus Seneca, Ancient Roman philosopher'
		},
		cv: {
			title: 'CV',
			description: 'Resume and work experience of Shijie Zhou — software engineer and computer artist.'
		},
		exclusive: {
			title: 'Exclusive',
			description: 'Exclusive media and video content from Shijie Zhou.'
		},
		expedition: {
			title: 'Expedition',
			heading: 'Expedition:',
			description: 'Expeditions and adventures of Shijie Zhou.'
		},
		podcast: {
			title: 'Podcast',
			description: 'Podcasts listened to and recommended by Shijie Zhou.'
		},
		footer: 'Created by Shijie Zhou 2015 - {year}',
		notFound: 'Page not found'
	},
	zh: {
		home: {
			title: '作品集',
			h1: 'SHIJIE ZHOU — 作品集',
			description: 'Shijie Zhou 的个人网站。这里能看到他做过的项目、设计作品和写的博客文章。'
		},
		about: {
			title: '关于',
			heading: '关于：',
			description:
				'Shijie Zhou，软件工程师，也喜欢做设计和创意编程。毕业于加州大学圣迭戈分校，现在在 Code 9 做网站开发。',
			quote: '人一生会接受两种教育：一种来自别人，另一种更重要，是自己给自己的。',
			brief: '—— 爱德华·吉本，英国历史学家',
			bio: 'Shijie Zhou 在加州大学圣迭戈分校读的是计算机与艺术结合的跨学科专业，同时也是 Worldview Project 组织里负责设计和搭建网站的一员。他目前在 Code 9 担任软件工程师。他先在 Green River College 拿到副学士学位，之后在 UCSD 完成本科学业，做过媒体内容和计算机艺术相关的工作，也熟悉网页设计，空闲时间还会在 eBay 上帮人定制卖货页面、推广商品。'
		},
		project: {
			title: '项目',
			heading: '项目：',
			description: '他做过的网站、设计和创意编程项目，挑了一些放上来。',
			quote: '想开始做一件事，办法就是别光说，直接去做。',
			brief: '—— 沃尔特·迪士尼，企业家、动画师、电影制片人'
		},
		blog: {
			title: '博客',
			heading: '博客：',
			description: '写的文章，主要关于怎么做网站、编程和设计。',
			quote: '想象力比知识更重要。知识是有限的，想象力却能包围整个世界。',
			brief: '—— 阿尔伯特·爱因斯坦，物理学家'
		},
		book: {
			title: '书籍',
			description: '正在读、觉得值得一看的书。'
		},
		collection: {
			title: '收藏',
			heading: '收藏：',
			description: '收集的一些好看的视觉设计和有意思的网页实验。',
			quote: '所谓完美，不是没什么可以再增加，而是没什么可以再删减。',
			brief: '—— 圣-埃克苏佩里，《小王子》作者'
		},
		consociation: {
			title: '社区',
			description: '参与过的社区、活动和合作。'
		},
		contact: {
			title: '联系',
			heading: '联系：',
			description: '想联系 Shijie Zhou？可以订阅邮件更新，也可以去社交主页找他。',
			quote: '积极又硬朗的乐观主义者，遇到问题直接上手干，摔过跟头反而更强。',
			brief: '—— 塞涅卡，古罗马哲学家'
		},
		cv: {
			title: '简历',
			description: '教育和工作经历的简历：软件工程师，也是计算机艺术爱好者。'
		},
		exclusive: {
			title: '独家',
			description: '一些独家收录的视频内容。'
		},
		expedition: {
			title: '远征',
			heading: '远征：',
			description: '旅行和探险的记录。'
		},
		podcast: {
			title: '播客',
			description: '平时在听的播客，推荐给大家。'
		},
		footer: '网站由 Shijie Zhou 制作 · 2015 - {year}',
		notFound: '页面不存在'
	}
};

/**
 * @param {string} lang
 * @param {string} path
 */
export function navLabel(lang, path) {
	const dict = /** @type {Record<string, Record<string, string>>} */ (nav);
	const map = dict[lang] || dict[DEFAULT_LOCALE];
	return map[path];
}

/**
 * @param {string} lang
 */
export function pageDict(lang) {
	const dict = /** @type {Record<string, Record<string, any>>} */ (pages);
	return dict[lang] || dict[DEFAULT_LOCALE];
}
