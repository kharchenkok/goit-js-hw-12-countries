import "@pnotify/core/dist/PNotify.css";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/BrightTheme.css";

export function pnotifyError(){
    error({
        title: 'Too many matches found. Please enter a more specific query!',
        
      });
}