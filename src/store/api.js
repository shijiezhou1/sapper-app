export async function fetchPosts() {
    const res = await fetch( `https://reqres.in/api/unknown?delay=1` );
    const json = await res.json();

    if ( res.ok ) {
        return json;
    } else {
        throw new Error( json );
    }
}