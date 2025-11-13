import { Component } from '@angular/core';
import { DarkModeState } from '../dark-mode-state';
import { PopupState } from '../popup-state';

@Component({
    selector: 'app-mode-switch',
    imports: [],
    templateUrl: './mode-switch.html',
    styleUrl: './mode-switch.css'
})

export class ModeSwitch {
    darkMode = true;
    selectorDark = true;
    isTransitioning = false;

    constructor(private currState: PopupState, private darkState: DarkModeState) { 
    }

    toggleLight() {
        if (this.isTransitioning)
            return;

        if (!this.selectorDark)
            return;

        this.isTransitioning = true;
        // this.darkMode = false;
        this.selectorDark = false;
        this.darkState.toggleLightOn();  
        
        setTimeout(() => {
            this.darkMode = false;
            // this.darkPropColor = false;
        }, 2000)

        setTimeout(() => {
            this.isTransitioning = false;
        }, 5000);
    }

    toggleDark() {
        if (this.isTransitioning)
            return;

        if (this.selectorDark)
            return;

        this.isTransitioning = true;
        this.selectorDark = true;
        this.darkState.toggleDarkOn();

        setTimeout(() => {
            this.darkMode = true;
        }, 2000)

        setTimeout(() => {
            this.isTransitioning = false;
        }, 5000);
    }

    openContact() {
        this.currState.switchContact();
    }

    openProjects() {
        this.currState.switchProjects();
    }

    openResume() {
        window.open('assets/KeerthiRamesh.pdf')
    }
}
