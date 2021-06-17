import { writable } from 'svelte/store';

export const count = writable( 0 );

const creator = () => {
    let value = [];
    const { subscribe, set, update } = writable( value );
    return { subscribe, set, update, };
};

const createArticles = () => creator();

export const articles = createArticles();

const createBooks = () => creator();

export const books = createBooks();

const createPodcasts = () => creator();

export const podcasts = createPodcasts();

const createConsociation = () => creator();

export const consociations = createConsociation();

const createMedium = () => creator();

export const medium = createMedium();
