import '@pnotify/core/dist/PNotify.css';
import { error, notice } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

export function pnotifyError() {
  error({
    title: 'Too many matches found. Please enter a more specific query!',
    delay: 1500,
  });
}
export function pnotifyNotice() {
  notice({
    title: 'The country you entered is not found. Try again',
    delay: 1500,
  });
}
