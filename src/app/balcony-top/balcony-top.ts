import { Component } from '@angular/core';
import { DarkModeState } from '../dark-mode-state';

@Component({
    selector: 'app-balcony-top',
    imports: [],
    templateUrl: './balcony-top.html',
    styleUrl: './balcony-top.css'
})

export class BalconyTop {
    darkMode: boolean = true;
    coverGradient: boolean = false;

    constructor(private darkState: DarkModeState) {}
    
    ngOnInit() {
        this.darkState.darkMode$.subscribe(
            val => {
                if (!val)
                    this.switchToLight();
                else
                    this.switchToDark();
            }
        )
    }

    switchToLight() {
        this.coverGradient = true
        
        setTimeout(() => {
            this.darkMode = false;
        }, 2000)

        setTimeout(() => {
            this.coverGradient = false;
        }, 4000)
    }

    switchToDark() {
        this.coverGradient = true

        setTimeout(() => {
            this.darkMode = true;
        }, 2000)

        setTimeout(() => {
            this.coverGradient = false;
        }, 4000)
    }
}
