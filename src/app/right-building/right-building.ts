import { Component } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { PopupState } from '../popup-state';
import { DarkModeState } from '../dark-mode-state';

@Component({
    selector: 'app-right-building',
    imports: [],
    templateUrl: './right-building.html',
    styleUrl: './right-building.css'
})

export class RightBuilding {
    darkMode: boolean = true;
    coverGradient: boolean = false;

    currHours: string = '';
    currMins: string = '';
    currDot: boolean = false;

    private timerSub?: Subscription;
    private subscription?: Subscription;
    constructor(private currState: PopupState, private darkState: DarkModeState) { }

    updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        
        this.currHours = `${hours}`;
        this.currMins = `${minutes}`;
    }

    ngOnInit() {
        this.darkState.darkMode$.subscribe(
            val => {
                if (!val)
                    this.switchToLight();
                else
                    this.switchToDark();
            }
        )

        this.updateTime();

        this.timerSub = interval(5000).subscribe(
            () => this.updateTime()
        )

        this.subscription = timer(0, 1000).subscribe(() => {
            this.currDot = !this.currDot;
        });
    }

    ngOnDestroy() {
        this.timerSub?.unsubscribe();
        this.subscription?.unsubscribe();
        
    }

    openAboutMe() {
        this.currState.switchAbouMe();
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
