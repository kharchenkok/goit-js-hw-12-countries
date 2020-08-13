import { pnotifyError } from "./pnotify";
import { markupCountryList, markupClear, murkupCountry } from "./markup";

export function createElements(arr){
if(arr.length>10){
        // markupClear(arr)
        pnotifyError()

}else if(arr.length>=2 && arr.length<=10){
    console.log(arr);
    // markupClear(arr)
    markupCountryList(arr)
}else if(arr.lenth === 1){
    murkupCountry(arr)
}
}
