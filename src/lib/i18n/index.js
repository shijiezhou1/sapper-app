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
			description:
				'Shijie Zhou —— 软件工程师与计算机艺术家。浏览前端工程项目、Web 开发实验、设计作品与博客文章等。'
		},
		about: {
			title: '关于',
			heading: '关于：',
			description:
				'Shijie Zhou 是来自加州大学圣迭戈分校的软件工程师与计算机艺术家，现于 Code 9, Pte Ltd 构建 Web 体验。',
			quote: '每个人都会接受两种教育：一种来自他人，另一种更为重要，来自自己。',
			brief: '—— 爱德华·吉本，英国历史学家',
			bio: 'Shijie Zhou 就读于加州大学圣迭戈分校，主修跨学科计算机艺术专业，同时是 Worldview Project 组织中负责设计与构建 Web 项目的成员。目前他在 Code 9, Pte Ltd 担任软件工程师。他在 Green River College 获得副学士学位，并在加州大学圣迭戈分校完成文学学士学位。他在媒体应用与计算机艺术方面积累了丰富经验，也熟悉网页设计，业余时间会在 eBay 上定制销售页面来推广商品。'
		},
		project: {
			title: '项目',
			heading: '项目：',
			description: 'Shijie Zhou 的前端工程、设计与创意编程作品精选。',
			quote: '开始做事的方法，就是停止空谈，开始行动。',
			brief: '—— 沃尔特·迪士尼，企业家、动画师、作家、配音演员与电影制片人'
		},
		blog: {
			title: '博客',
			heading: '博客：',
			description: 'Shijie Zhou 关于 Web 开发、工程与设计的文章与实验。',
			quote: '想象力比知识更重要。知识是有限的，而想象力环绕着整个世界。',
			brief: '—— 阿尔伯特·爱因斯坦，理论物理学家'
		},
		book: {
			title: '书籍',
			description: 'Shijie Zhou 正在阅读与学习的书籍。'
		},
		collection: {
			title: '收藏',
			heading: '收藏：',
			description: 'Shijie Zhou 收集的视觉实验与灵感。',
			quote: '完美之所以达成，不是因为无可增添，而是因为无可删减。',
			brief: '—— 安托万·德·圣-埃克苏佩里，法国作家、诗人、记者与先驱飞行员'
		},
		consociation: {
			title: '社区',
			description: '与 Shijie Zhou 相关的社区、活动与合作。'
		},
		contact: {
			title: '联系',
			heading: '联系：',
			description: '与 Shijie Zhou 取得联系 —— 邮件订阅与社交主页。',
			quote: '意志坚定的乐观主义者以实干精神面对问题，并在磨难之后变得更加强大。',
			brief: '—— 吕基乌斯·阿奈乌斯·塞涅卡，古罗马哲学家'
		},
		cv: {
			title: '简历',
			description: 'Shijie Zhou 的简历与工作经历 —— 软件工程师与计算机艺术家。'
		},
		exclusive: {
			title: '独家',
			description: 'Shijie Zhou 的独家媒体与视频内容。'
		},
		expedition: {
			title: '远征',
			heading: '远征：',
			description: 'Shijie Zhou 的远征与旅程。'
		},
		podcast: {
			title: '播客',
			description: 'Shijie Zhou 收听并推荐的播客。'
		},
		footer: '由 Shijie Zhou 制作 · 2015 - {year}',
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
