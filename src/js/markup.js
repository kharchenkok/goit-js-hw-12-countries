// import { createElements } from "./createElements";
import countriesList from '../template/countries-list'

let countryList = document.querySelector('.country-list');

export function markupCountryList(arr) {
  countryList.innerHTML = ""
  console.log(arr);
  let markup = arr.map(
    elem =>
    (countryList.insertAdjacentHTML('afterbegin',countriesList(elem))),
    );
    return markup;
  }
  
  export function murkupCountry(arr) {
    countryList.innerHTML = ""

  console.log(arr);
  let markup = arr.map(elem => {
    console.log(elem);

    countryList.insertAdjacentHTML('afterbegin',

      `<li class = "country-item">
      <h2>${elem.name}</h2>
      <div class = "userCountry-list">
      <p class = "userCountry-item"> Capital: ${elem.capital}</p>
      <p class = "userCountry-item"> Population: ${elem.population}</p>
      </div>
      </li>`
    )
  });

  return markup;
}

export function markupClear() {
  return (countryList.innerHTML = '');
}
