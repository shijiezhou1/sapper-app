const API_URL = 'https://shijiezhou.herokuapp.com/api/';
// 'https://api.shijiezhou.com/api/';

const getByUrl = async ( input ) => {
    const res = await fetch( input );
    const json = await res.json();

    if ( res.ok ) {
        return json;
    } else {
        throw new Error( json );
    }
}

export const fetchPosts = async () => getByUrl( `${ API_URL }articles` );
export const fetchBooks = async () => getByUrl( `${ API_URL }books` );
export const fetchPodcasts = async () => getByUrl( `${ API_URL }podcasts` );
export const fetchConsociations = async () => getByUrl( `${ API_URL }consociation` );
export const fetchMedium = async () => getByUrl( `${ API_URL }medium` );
