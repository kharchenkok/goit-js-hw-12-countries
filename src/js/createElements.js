import { pnotifyError, pnotifyNotice } from './pnotify';
import { markupCountryList, murkupCountry, markupClear } from './markup';

export function createElements(arr) {
    markupClear()
  if (arr.length > 10) {
    pnotifyError();
  } else if (arr.length >= 2 && arr.length <= 10) {
    console.log(arr);
    markupCountryList(arr)
  } else if (arr.length === 1) {
    murkupCountry(arr)
  } else{
    pnotifyNotice()
  }
}
