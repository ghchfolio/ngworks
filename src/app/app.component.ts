import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavComponent],
    template: `
    <app-nav></app-nav>
   
    <h1 class="text-center">Welcome to {{title}}!</h1>
   
    <main class="container">
        <router-outlet />
    </main>
  `,
    styles: [],
})
export class AppComponent {
    title = 'ngworks';
}
