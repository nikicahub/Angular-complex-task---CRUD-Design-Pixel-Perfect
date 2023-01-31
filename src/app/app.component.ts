import { Component } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  template: `

    <app-header></app-header>

    <app-contact-dashboard></app-contact-dashboard>

    <router-outlet></router-outlet>
    
  `,
  styles: []
})
export class AppComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
