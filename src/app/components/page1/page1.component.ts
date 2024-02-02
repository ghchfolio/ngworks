import { Component } from '@angular/core';

@Component({
    selector: 'app-page1',
    standalone: true,
    imports: [],
    template: `
   <h6>Notes</h6>
   <ul>
    <li>copied code from angular site, paste in notepad then paste in editor</li>
    <li>remove imported files, when error appears re-import</li>
   </ul>

   <div class="text-center">
    <img src="assets/icons/icon-72x72.png" alt="angular logo" title="angular logo" width="72"  height="72"/>
   </div>
  `,
    styles: ``
})
export class Page1Component {

}
