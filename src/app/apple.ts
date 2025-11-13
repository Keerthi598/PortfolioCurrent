import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Apple {
    private isApple = new BehaviorSubject<boolean>(false);
    appleSub$ = this.isApple.asObservable();

    private isMac = new BehaviorSubject<boolean>(false);
    macSub$ = this.isMac.asObservable();

    constructor() { }

    toggleApple(val: boolean) {
        this.isApple.next(val);
    }

    toggleMac(val: boolean) {
        this.isMac.next(val);
    }
}
