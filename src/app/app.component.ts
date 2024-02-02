import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { CheckForUpdateService } from './services/check-for-update.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavComponent],
    template: `
    <app-nav></app-nav>
   
    <h1 class="text-center my-4">{{ title }}</h1>
   
    <main class="container">
        <router-outlet />
    </main>
  `,
    styles: [],
})
export class AppComponent {
    title = 'Ng17, PWAs & Github Pages';

    constructor(private cfus: CheckForUpdateService) { }
}
