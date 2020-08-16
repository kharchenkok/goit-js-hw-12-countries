import './styles.css';
import debounce from 'lodash.debounce'
import fetchCountries from './js/fetchCountries';
import { createElements } from './js/createElements';
import refs from './js/refs';



const searchCountries = function(e){
    fetchCountries(e.target.value).then((data) => {
        createElements(data)})
    
}


refs.userInput.addEventListener('input', debounce(searchCountries,500))