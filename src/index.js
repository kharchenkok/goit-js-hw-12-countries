import './styles.css';
import fetchCountries from './fetchCountries';

const refs={
    userInput:document.querySelector('#country-input')
}
console.log(refs.userInput);

const searchCountries = function(e){
    console.log(e.target.value);
    fetchCountries(e.target.value)
}


refs.userInput.addEventListener('input', searchCountries)