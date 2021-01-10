const getByUrl = async ( input ) => {
    const res = await fetch( input );
    const json = await res.json();

    if ( res.ok ) {
        return json;
    } else {
        throw new Error( json );
    }
}

export async function fetchPosts() {
    return getByUrl( `https://api.shijiezhou.com/api/articles` );
}

export async function fetchBooks() {
    return getByUrl( `https://api.shijiezhou.com/api/books` );
}

export const fetchMedium = async () => getByUrl( `https://api.shijiezhou.com/api/medium` );

export const fetchPodcasts = async () => getByUrl( `https://api.shijiezhou.com/api/podcasts` );

export const fetchConsociations = async () => getByUrl( `https://api.shijiezhou.com/api/consociation` );
