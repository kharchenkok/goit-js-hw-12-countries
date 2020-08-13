// import { createElements } from "./createElements";

let countryList = document.querySelector('.country-list');

export function markupCountryList(arr) {
  console.log(arr);
  let markup = arr.map(
    elem =>
      (countryList.innerHTML += `<li class = "country-item">${elem.name}</li>`),
  );
  return markup;
}

export function murkupCountry(arr) {
  console.log(arr);
  let markup = arr.map(elem => {
    console.log(elem);

    countryList.innerHTML = `
    <li class = "country-item">
    <h2>${elem.name}</h2>
    <div class = "userCountry-list">
    <p class = "userCountry-item"> Capital: ${elem.capital}</p>
    <p class = "userCountry-item"> Population: ${elem.population}</p>
    </div>
    </li>`;
  });

  return markup;
}

export function markupClear() {
  return (countryList.innerHTML = '');
}
