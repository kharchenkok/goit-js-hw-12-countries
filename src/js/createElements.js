import { pnotifyError } from "./pnotify";
import { markupCountryList, murkupCountry } from "./markup";

export function createElements(arr){
if(arr.length>10){
        pnotifyError()

}else if(arr.length>=2 && arr.length<=10){
    console.log(arr);
    markupCountryList(arr)
}else if(arr.lenth <2){
    murkupCountry(arr)
}
}
