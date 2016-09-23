import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <my-navigation></my-navigation>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
}