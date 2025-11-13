import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PopupState {
    private showContact = new BehaviorSubject<boolean>(false);
    showCon$ = this.showContact.asObservable();

    private showProjects = new BehaviorSubject<boolean>(false);
    showProj$ = this.showProjects.asObservable();

    private showAbout = new BehaviorSubject<boolean>(false);
    showAb$ = this.showAbout.asObservable();

    switchContact() {
        // console.log("Contact On in Popup State");
        this.showContact.next(true);
    }

    switchContactOff() {
        // console.log("Contact Off in Popup State");
        this.showContact.next(false);
    }


    switchProjects() {
        this.showProjects.next(true);
    }

    switchProjectsOff() {
        this.showProjects.next(false);
    }


    switchAbouMe() {
        this.showAbout.next(true);
    }

    switchAboutMeOff() {
        this.showAbout.next(false);
    }

}
