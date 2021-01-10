import { writable } from 'svelte/store';

export const count = writable( 0 );

function createArticles() {
    const { subscribe, set, update } = writable( [] );

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