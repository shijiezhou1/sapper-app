import { API_URL } from "../config";

const getByUrl = async ( url ) => {
    const res = await fetch( url );
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
