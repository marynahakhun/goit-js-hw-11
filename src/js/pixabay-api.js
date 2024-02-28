const KEY = '42545240-8b0483885ebe28877133c0801';
const BASE_URL = 'https://pixabay.com/api/';

export function pixabayApi(query) {
    const LINK = `${BASE_URL}?key=${KEY}&q=${query}`;
    return fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error('IMG error');
            }
            return response.json();
        });
}
