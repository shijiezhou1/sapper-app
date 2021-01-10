export async function fetchPosts() {
    const res = await fetch( `https://api.shijiezhou.com/api/articles` );
    const json = await res.json();

    if ( res.ok ) {
        return json;
    } else {
        throw new Error( json );
    }
}

export async function fetchBooks() {
    const res = await fetch( `https://api.shijiezhou.com/api/books` );
    const json = await res.json();

    if ( res.ok ) {
        return json;
    } else {
        throw new Error( json );
    }
}

export async function fetchMedium() {
    const res = await fetch( `https://api.shijiezhou.com/api/medium` );
    const json = await res.json();

    if ( res.ok ) {
        return json;
    } else {
        throw new Error( json );
    }
}
