import { Component } from '@angular/core';
import { DarkModeState } from '../dark-mode-state';

@Component({
    selector: 'app-background',
    imports: [],
    templateUrl: './background.html',
    styleUrl: './background.css'
})

export class Background {
    darkMode: boolean = true;

    darkBackground: boolean = true;

    move_sun_out: boolean  = false;
    move_sun_in: boolean  = false;
    move_moon_out: boolean  = false;
    move_moon_in: boolean  = false;

    disappear_sun: boolean  = true;
    disappear_moon: boolean  = false;

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
        // Move Moon Out 2s
        // Change Background 1s
        // Move Sun In 2s

        this.move_moon_out = true;
        setTimeout(() => {
            this.disappear_moon = true;
            this.move_moon_out = false;
            this.darkBackground = false;
            this.darkMode = false;
        }, 1800)

        setTimeout(() => {
            this.move_sun_in = true;
        }, 3000)
        setTimeout(() => {
            this.disappear_sun = false;
        }, 3100)

        setTimeout(() => {
            this.move_sun_in = false;
        }, 5000)    
    }

    switchToDark() {
        // Move Sun Out 2s
        // Change Background 1s
        // Move Moon In 2s

        this.move_sun_out = true;
        setTimeout(() => {
            this.disappear_sun = true;
            this.move_sun_out = false;
            this.darkBackground = true;
            this.darkMode = true;
        }, 1800)

        setTimeout(() => {
            this.move_moon_in = true;
        }, 3000)
        setTimeout(() => {
            this.disappear_moon = false;
        }, 3100)

        setTimeout(() => {
            this.move_moon_in = false;
        }, 5000)   
    }
}
