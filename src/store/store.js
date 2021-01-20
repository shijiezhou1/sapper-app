import { writable } from 'svelte/store';

export const count = writable( 0 );

const creator = () => {
    let value = [];
    const { subscribe, set, update } = writable( value );
    return { subscribe, set, update, };
};

function createArticles() {
    return creator();
}

export const articles = createArticles();


function createBooks() {
    return creator();
}

export const books = createBooks();

function createPodcasts() {
    return creator();
}

export const podcasts = createPodcasts();


function createConsociation() {
    return creator();
}

export const consociations = createConsociation();

function createMedium() {
    return creator();
}

export const medium = createMedium();