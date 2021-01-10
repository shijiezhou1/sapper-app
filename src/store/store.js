import { writable } from 'svelte/store';

export const count = writable( 0 );

function createArticles() {
    let value = [];
    const { subscribe, set, update } = writable( value );

    return {
        subscribe,
        set,
        update,
        increment: () => {
        },
        decrement: () => {
        },
        reset: () => {
        }
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
        increment: () => {
        },
        decrement: () => {
        },
        reset: () => {
        }
    };
}

export const books = createBooks();