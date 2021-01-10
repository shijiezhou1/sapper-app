import { writable } from 'svelte/store';

export const count = writable( 0 );

function createArticles() {
    let value = [];
    const { subscribe, set, update } = writable( value );

    return {
        subscribe,
        set,
        update,
    };
}

export const articles = createArticles();


function createBooks() {
    let value = [];
    const { subscribe, set, update } = writable( value );

    return {
        subscribe,
        set,
        update,
    };
}

export const books = createBooks();

function createPodcasts() {
    let value = [];
    const { subscribe, set, update } = writable( value );

    return {
        subscribe,
        set,
        update
    };
}

export const podcasts = createPodcasts();


function createConsociation() {
    let value = [];
    const { subscribe, set, update } = writable( value );

    return {
        subscribe,
        set,
        update,
    };
}

export const consociations = createConsociation();