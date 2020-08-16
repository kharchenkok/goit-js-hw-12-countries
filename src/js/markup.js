import countriesList from '../template/countries-list.hbs';
import userCountry from '../template/country-user.hbs';
import refs from './refs';

export function markupCountryList(arr) {
  return refs.countryList.insertAdjacentHTML('afterbegin', countriesList(arr));
}

export function murkupCountry(arr) {
  return refs.countryList.insertAdjacentHTML('afterbegin', userCountry(arr));
}

export function markupClear() {
  return (refs.countryList.innerHTML = '');
}
