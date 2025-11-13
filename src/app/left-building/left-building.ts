import { Component } from '@angular/core';
import { PopupState } from '../popup-state';
import { DarkModeState } from '../dark-mode-state';

@Component({
  selector: 'app-left-building',
  imports: [],
  templateUrl: './left-building.html',
  styleUrl: './left-building.css'
})

export class LeftBuilding { 
    darkMode: boolean = true;

    constructor(private currState: PopupState, private darkState: DarkModeState) { }

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
    
    openContact() {
        this.currState.switchContact();
    }

    openProjects() {
        this.currState.switchProjects();
    }
}

