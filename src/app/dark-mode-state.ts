import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DarkModeState {
    private dark = new BehaviorSubject<boolean>(true);
    darkMode$ = this.dark.asObservable();

    constructor() { }

    toggleDarkOn() {
        this.dark.next(true);
    }

    toggleLightOn() {
        this.dark.next(false);
    }
}
