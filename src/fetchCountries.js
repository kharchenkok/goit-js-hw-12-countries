import { createElements } from "./createElements";

function fetchCountries(search) {
  const url = `https://restcountries.eu/rest/v2/name/${search}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.length);
      createElements(data)
    });
}
export default fetchCountries;
