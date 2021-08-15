import { API_URL } from "../config";

const getCurrentIp = async () => {
    const res = await fetch('https://txt.go.sohu.com/ip/soip');
    const text = await res.text();
    if (res.ok) {
        const findKey = ';sohu_IP_Loc=';
        const foundIndex = text.indexOf(findKey);
        const firstLetter = text[foundIndex + findKey.length + 1];
        const secondLetter = text[foundIndex + findKey.length + 2];
        if (firstLetter + secondLetter === "CN") {
            // china region
        } else {
            // global access
        }
        return text;
    } else {
        throw new Error(json);
    }
}

const getByUrl = async (url) => {
    const res = await fetch(url);
    const json = await res.json();

    if (res.ok) {
        return json;
    } else {
        throw new Error(json);
    }
}

const postEmailSubscribe = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
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
}

export const fetchPosts = async () => getByUrl(`${API_URL}articles`);
export const fetchBooks = async () => getByUrl(`${API_URL}books`);
export const fetchPodcasts = async () => getByUrl(`${API_URL}podcasts`);
export const fetchConsociations = async () => getByUrl(`${API_URL}consociation`);
export const fetchMedium = async () => getByUrl(`${API_URL}medium`);

export const fetchSubscribe = async (data) => postEmailSubscribe(`${API_URL}subscribe`, data);
export const fetchCurrentAddress = async () => getCurrentIp();