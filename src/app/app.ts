import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Background } from "./background/background";
import { RightBuilding } from "./right-building/right-building";
import { BalconyTop } from "./balcony-top/balcony-top";
import { CoverBuildingRight } from "./cover-building-right/cover-building-right";
import { LeftBuilding } from "./left-building/left-building";
import { BalconyBottom } from "./balcony-bottom/balcony-bottom";
import { PopupContact } from "./popup-contact/popup-contact";
import { PopupState } from './popup-state';
import { BehaviorSubject } from 'rxjs';
import { PopupProjects } from "./popup-projects/popup-projects";
import { PopupAbout } from "./popup-about/popup-about";
import { DarkModeState } from './dark-mode-state';
import { ModeSwitch } from "./mode-switch/mode-switch";
import { Apple } from './apple';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Background, RightBuilding, BalconyTop, CoverBuildingRight, LeftBuilding, BalconyBottom, PopupContact, PopupProjects, PopupAbout, ModeSwitch],
    templateUrl: './app.html',
    styleUrl: './app.css',
    standalone: true
})
export class App {
    protected title = 'PersonalWeb';
    displayProject = false;
    displayContact = false;
    displayAboutMe = false;
    darkMode = true;
    selectorDark = true;
    isTransitioning = false;
    darkPropColor = true;

    isApple = false;

    constructor(private currState: PopupState, private darkState: DarkModeState, private apple: Apple) { 
    }

    ngOnInit() {
        this.currState.showCon$.subscribe(
            val => {
                this.displayContact = val;
            }
        )

        this.currState.showProj$.subscribe(
            val => {
                this.displayProject = val;
            }
        )

        this.currState.showAb$.subscribe(
            val => {
                this.displayAboutMe = val;
            }
        )

        const ua = navigator.userAgent;
        this.isApple = /iPhone|iPad|iPod|Macintosh/.test(ua);

        this.apple.toggleApple(this.isApple)
        if (/Macintosh/.test(ua))
            this.apple.toggleMac(true);
    }

    toggleLight() {
        if (this.isTransitioning)
            return;

        this.isTransitioning = true;
        // this.darkMode = false;
        this.selectorDark = false;
        this.darkState.toggleLightOn();  
        
        setTimeout(() => {
            this.darkMode = false;
            this.darkPropColor = false;
        }, 2000)

        setTimeout(() => {
            this.isTransitioning = false;
        }, 5000);
    }

    toggleDark() {
        if (this.isTransitioning)
            return;

        this.isTransitioning = true;
        // this.darkMode = true;
        this.selectorDark = true;
        this.darkState.toggleDarkOn();

        setTimeout(() => {
            this.darkMode = true;
            this.darkPropColor = false;
        }, 2000)

        setTimeout(() => {
            this.isTransitioning = false;
        }, 5000);
    }
}
