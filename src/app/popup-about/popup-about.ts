import { Component } from '@angular/core';
import { PopupState } from '../popup-state';
import { Apple } from '../apple';

@Component({
    selector: 'app-popup-about',
    imports: [],
    templateUrl: './popup-about.html',
    styleUrl: './popup-about.css'
})

export class PopupAbout {
    showScreen = false;
    showBack = false;
    showContent = false;

    isApple = false;
    isMac= false;

    constructor(private popupCon: PopupState, private apple: Apple) { }

    ngOnInit() {
        this.popupCon.showAb$.subscribe(
            val => {
                this.showScreen = val;
                this.showBack = val;
                setTimeout(() => {
                    this.showContent = val;
                }, 1000)
            }
        )

        this.apple.appleSub$.subscribe(
            val => {
                this.isApple = val;
            }
        )

        this.apple.macSub$.subscribe(
            val => {
                this.isMac = val;
            }
        )
    }

    closeABouMe() {
        this.showContent = false;
        setTimeout(() => {
            this.showBack = false;
        }, 1000)
        setTimeout(() => {
            this.showScreen = false;
            this.popupCon.switchAboutMeOff();
        }, 2000)
    }
}
