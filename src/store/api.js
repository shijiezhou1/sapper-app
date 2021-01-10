const getByUrl = async ( input ) => {
    const res = await fetch( input );
    const json = await res.json();

    if ( res.ok ) {
        return json;
    } else {
        throw new Error( json );
    }
}

export const fetchPosts = async () => getByUrl( `https://api.shijiezhou.com/api/articles` );
export const fetchBooks = async () => getByUrl( `https://api.shijiezhou.com/api/books` );
export const fetchPodcasts = async () => getByUrl( `https://api.shijiezhou.com/api/podcasts` );
export const fetchConsociations = async () => getByUrl( `https://api.shijiezhou.com/api/consociation` );
export const fetchMedium = async () => getByUrl( `https://api.shijiezhou.com/api/medium` );
