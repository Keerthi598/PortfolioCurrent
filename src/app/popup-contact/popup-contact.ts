import { Component } from '@angular/core';
import { PopupState } from '../popup-state';
import { Apple } from '../apple';


@Component({
  selector: 'app-popup-contact',
  imports: [],
  templateUrl: './popup-contact.html',
  styleUrl: './popup-contact.css'
})
export class PopupContact {
    showScreen = false;
    showBack = false;
    showContent = false;

    isApple = false;

    constructor(private popupCon: PopupState, private apple: Apple) { }


    ngOnInit() {
        this.popupCon.showCon$.subscribe(
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
    }

    closeContact() {
        this.showContent = false;
        setTimeout(() => {
            this.showBack = false;
        }, 1000)
        setTimeout(() => {
            this.showScreen = false;
            this.popupCon.switchContactOff();
        }, 2000)
    }

    goToLink(url: string | undefined){
        if (!url)
            return;
        window.open(url);
    }

}