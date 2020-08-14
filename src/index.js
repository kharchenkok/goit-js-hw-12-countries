import './styles.css';
import debounce from 'lodash.debounce'
import fetchCountries from './js/fetchCountries';
import { createElements } from './js/createElements';


const refs={
    userInput:document.querySelector('#country-input')
}
console.log(refs.userInput);

const searchCountries = function(e){
    console.log(e.target.value);
    fetchCountries(e.target.value).then((data) => createElements(data))
}


refs.userInput.addEventListener('input', debounce(searchCountries,500))