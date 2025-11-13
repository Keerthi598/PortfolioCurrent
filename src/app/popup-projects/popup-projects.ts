import { Component } from '@angular/core';
import { PopupState } from '../popup-state';
import { PROJECTS, Project } from '../data/projects';
import { Apple } from '../apple';


@Component({
    selector: 'app-popup-projects',
    imports: [],
    templateUrl: './popup-projects.html',
    styleUrl: './popup-projects.css'
})

export class PopupProjects {
    showScreen = false;
    showBack = false;
    showContent = false;

    isApple = false;
    isMac= false;


    projects: Project[] = PROJECTS;

    constructor(private popupCon: PopupState, private apple: Apple) { }
    expandedIndex: number | null = null;
 
    ngOnInit() {
        this.popupCon.showProj$.subscribe(
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

    closeProjects() {
        this.showContent = false;
        setTimeout(() => {
            this.showBack = false;
        }, 1000)
        setTimeout(() => {
            this.showScreen = false;
            this.popupCon.switchProjectsOff();
        }, 2000)
    }


    goToLink(url: string){
        window.open(url, "_blank");
    }

    toggleExpand(i: number) {
        this.expandedIndex = this.expandedIndex === i ? null : i;
    }
}

