import fetch from 'isomorphic-fetch';

export function getJSON(url) {
    return fetch(url).then(response => {
        if (response.state >=400) {
            return false;
        }
        return response.json();
    }).catch(e => {
        return e;
    });
}
