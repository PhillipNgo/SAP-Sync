const EVENTS_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';
//Create key.js and export your API key from there. API Keys are obtained from http://developer.ticketmaster.com/
import API_KEY from './key';
const COUNTRY_CODE = 'US';

//Finds events based on the postal code parameter
export const findEvents = (postalCode) => {
  const url = EVENTS_URL + "countryCode=" + COUNTRY_CODE + '&apikey=' + API_KEY + '&postalCode=' + postalCode;
  return fetch(url).then(response => {return response.json()})
}
