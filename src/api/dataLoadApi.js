'user strict';

export function getData(endPoint) {
  return fetch(endPoint, { method: 'GET'})
    .then( response => Promise.all([response.json()]));
}