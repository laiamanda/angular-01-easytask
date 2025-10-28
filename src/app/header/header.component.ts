import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true, // Angular 19+ this will be default as true
    // template: '<h1> Hello World </h1>' // This is only for use inline and nothing complicated
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})

export class HeaderComponent {}