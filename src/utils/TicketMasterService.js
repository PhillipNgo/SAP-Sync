const EVENTS_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';
const API_KEY = 'bGcQOY6fVkhTWFOtEbAHcqmlVhNKWqqG';
const COUNTRY_CODE = 'US';

export const findEvents = (postalCode) => {
  const url = EVENTS_URL + "countryCode=" + COUNTRY_CODE + '&apikey=' + API_KEY + '&postalCode=' + postalCode;
  return fetch(url).then(response => {return response.json()})
}
