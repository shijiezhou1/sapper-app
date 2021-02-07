import { writable } from 'svelte/store';

const creator = () => {
    let value = [];
    const { subscribe, set, update } = writable( value );
    return { subscribe, set, update, };
};

// const createArticles = () => creator();
// const createBooks = () => creator();
// const createPodcasts = () => creator();
// const createConsociation = () => creator();
// const createMedium = () => creator();

const articles = () => creator();
const books = () => creator();
const podcasts = () => creator();
const consociations = () => creator();
const medium = () => creator();
const count = writable( 0 );

export default {
    articles,
    books,
    podcasts,
    consociations,
    medium,
    count,
};