import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibilityControlsComponent } from './components/accessibility/accessibility-controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccessibilityControlsComponent],
  template: `
    <app-accessibility-controls></app-accessibility-controls>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'bank';
}
