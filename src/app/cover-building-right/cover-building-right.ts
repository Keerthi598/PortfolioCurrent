import { Component } from '@angular/core';
import { DarkModeState } from '../dark-mode-state';

@Component({
    selector: 'app-cover-building-right',
    imports: [],
    templateUrl: './cover-building-right.html',
    styleUrl: './cover-building-right.css'
})

export class CoverBuildingRight {
    darkMode: boolean = true;
    
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
        setTimeout(() => {
            this.darkMode = false;
        }, 2000)
    }

    switchToDark() {
        setTimeout(() => {
            this.darkMode = true;
        }, 2000)
    }
}
