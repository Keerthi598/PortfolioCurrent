import { Component } from '@angular/core';
import { DarkModeState } from '../dark-mode-state';

@Component({
    selector: 'app-balcony-bottom',
    imports: [],
    templateUrl: './balcony-bottom.html',
    styleUrl: './balcony-bottom.css'
})

export class BalconyBottom {
    darkMode: boolean = true;
    isTransitioning: boolean = false;
    selectorDark: boolean = true;
    

    constructor(private darkState: DarkModeState) {}

    ngOnInit() {
        this.darkState.darkMode$.subscribe(
            val => {
                if (!val)
                    this.toggleLight();
                else
                    this.toggleDark();
            }
        )
    }

    toggleDark() {
        if (this.isTransitioning)
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

    toggleLight() {
        if (this.isTransitioning)
            return;

        this.isTransitioning = true;
        this.selectorDark = false;
        this.darkState.toggleLightOn();  
        
        setTimeout(() => {
            this.darkMode = false;
        }, 2000)

        setTimeout(() => {
                    this.isTransitioning = false;
                }, 5000);
    }
}
