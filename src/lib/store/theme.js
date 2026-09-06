const STORAGE_KEY = 'theme';

/** @returns {'light' | 'dark'} */
function getInitialTheme() {
	if (typeof window === 'undefined') return 'light';
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** @param {'light' | 'dark'} theme */
function applyTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem(STORAGE_KEY, theme);
}

export function initTheme() {
	const theme = getInitialTheme();
	applyTheme(theme);
	return theme;
}

/** @param {'light' | 'dark'} current */
export function toggleTheme(current) {
	const next = current === 'light' ? 'dark' : 'light';
	applyTheme(next);
	return next;
}