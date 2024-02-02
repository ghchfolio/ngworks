import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NavComponent],
    template: `
    <nav class="container navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    
  <a class="navbar-brand" href="#">Test 01</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="/page1" routerLinkActive="active">page1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="/page2" routerLinkActive="active">page2</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `,
    styles: ``
})
export class NavComponent {

}
