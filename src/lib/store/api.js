import { API_URL } from '$lib/config';
import { VUE_APP_GITHUB_CDN, VUE_APP_GITEE_CDN } from '$lib/config';

const getCurrentIp = async () => {
	const res = await fetch(API_URL + 'geolocation/ipv4');
	const text = await res.json();
	if (res.ok) {
		return text.country_iso_code === 'CH' ? 'CH' : 'EN';
	} else {
		throw new Error(text);
	}
};

const getCollection = async () => {
	let slides = [];
	const condition = await getCurrentIp();
	const pick = condition === 'CH' ? VUE_APP_GITEE_CDN : VUE_APP_GITHUB_CDN;
	for (let i = 1; i <= 5; i++) {
		slides.push({ src: pick + `img/collection${i}.jpg` });
	}
	return slides;
};

/** @param {string} url */
const getByUrl = async (url) => {
	const res = await fetch(url);
	const json = await res.json();

	if (res.ok) {
		return json;
	} else {
		throw new Error(json);
	}
};

/** @param {string} url @param {{ email: string }} data */
const postEmailSubscribe = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: 'email=' + encodeURIComponent(data.email)
	});

	const json = await res.json();
	if (res.ok) {
		return json;
	} else {
		throw new Error(json);
	}
};

export const fetchArticles = async () => getByUrl(`${API_URL}articles`);
export const fetchBooks = async () => getByUrl(`${API_URL}books`);
export const fetchPodcasts = async () => getByUrl(`${API_URL}podcasts`);
export const fetchConsociations = async () => getByUrl(`${API_URL}consociation`);
export const fetchMedium = async () => getByUrl(`${API_URL}medium/cache`);
export const fetchCollection = async () => getCollection();

/** @param {{ email: string }} data */
export const fetchSubscribe = async (data) => postEmailSubscribe(`${API_URL}subscribe/hset`, data);
export const fetchCurrentAddress = async () => getCurrentIp();
