export async function fetchPosts() {
    const res = await fetch( `https://api.shijiezhou.com/api/articles` );
    const json = await res.json();

    if ( res.ok ) {
        return json;
    } else {
        throw new Error( json );
    }
}